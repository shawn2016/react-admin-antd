import React from 'react';
import { buriedPointEvent } from './analytins';
import { bugLog, home } from './analytinsType';
import { Modal, Toast } from 'antd-mobile';
import fetch from 'sx-fetch';
import Cookie from 'js-cookie';
// import { SXFToast } from 'utils/SXFToast';

import { store } from './store';
import { isMPOS } from './common';
import { getAppsList, getContactsList } from './publicApi';
import linkConf from './link.conf';

// 退出的api
const API = {
	LOGOUT: '/signup/logout', // 用户退出登陆
	GETSTSW: '/my/getStsw', // 获取首页进度
	getOperator: '/auth/operatorAuth', // 运营商的跳转URL
	qryPerdRate: '/bill/qryperdrate', // 0105-确认代还信息查询接口
	submitState: '/bill/apply', // 提交代还金申请
	idChkPhoto: '/auth/idChkPhoto',
	getFace: '/auth/getTencentFaceidData', // 人脸识别认证跳转URL
	CRED_CARD_COUNT: '/index/usrCredCardCount', // 授信信用卡数量查询
	checkEngaged: '/activeConfig/checkEngaged',
	saveUserInfoEngaged: '/activeConfig/saveUserInfoEngaged',
	checkIsEngagedUser: '/activeConfig/checkIsEngagedUser',
	mxoieCardList: '/moxie/mxoieCardList/C'
};
// 处理输入框失焦页面不回弹
export const handleInputBlur = () => {
	setTimeout(() => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		window.scrollTo(0, scrollTop);
	}, 100);
};

// 判断是否是微信打开
export const isWXOpen = () => {
	var ua = navigator.userAgent.toLowerCase();
	return /micromessenger/.test(ua) ? true : false;
};

// 判断是否是手机打开
export const isPhone = () => {
	var userAgentInfo = navigator.userAgent;
	var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
	var flag = false;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
};

export const pagesIgnore = (pathname = window.location.pathname) => {
	if (pathname) {
		let pageList = [
			'/protocol/',
			'/activity/',
			'/others/',
			'/landing/landing_page',
			'/common/auth_page',
			'/mpos/mpos_ioscontrol_page',
			'/home/credit_apply_succ_page', // 因为app直接跳转到h5的webview，因为放开
			'/home/loan_apply_succ_page', // 因为app直接跳转到h5的webview，因为放开
			'/home/loan_person_succ_page' // 因为app直接跳转到h5的webview，因为放开
		];
		if (isWXOpen()) {
			let pageListWx = ['/home/home', '/common/wx_middle_page', '/mpos/mpos_ioscontrol_page'];
			// h5的banner也会跳到/mpos/mpos_ioscontrol_page这个落地页，因此放开
			pageList = pageList.concat(pageListWx);
		} else if (isMPOS()) {
			let pageListMpos = ['/mpos/'];
			pageList = pageList.concat(pageListMpos);
		} else {
			let pageListCommon = [];
			pageList = pageList.concat(pageListCommon);
		}
		return pageList.some((item) => item && pathname.indexOf(item) > -1);
	}
};

// 逻辑有待优化
export const headerIgnore = (type) => {
	const ua = window.navigator.userAgent;
	if (type === 'false') {
		if (
			!/MicroMessenger/i.test(ua) &&
			!/QQ/i.test(ua) &&
			!/AlipayClient/i.test(ua) &&
			!/SuiXingPay-Mpos/i.test(ua) &&
			!/SuiXingPay-Cashier/i.test(ua)
		) {
			return true;
		} else {
			return false;
		}
	} else {
		if (
			/MicroMessenger/i.test(ua) ||
			/QQ/i.test(ua) ||
			/AlipayClient/i.test(ua) ||
			/SuiXingPay-Mpos/i.test(ua) ||
			/SuiXingPay-Cashier/i.test(ua)
		) {
			return true;
		} else {
			return false;
		}
	}
};

export const setTitle = (getTitle) => {
	var i = document.createElement('iframe');
	const { PROJECT_ENV } = process.env;
	if (PROJECT_ENV === 'pro') {
		// 生产环境配置
		i.src = 'https://lns-wap.vbillbank.com/favicon.ico';
	} else if (PROJECT_ENV === 'test') {
		i.src = 'https://lns-wap-test.vbillbank.com/favicon.ico';
	}
	i.style.display = 'none';
	i.onload = function() {
		setTimeout(function() {
			i.remove();
		}, 9);
	};
	document.title = getTitle;
	document.body.appendChild(i);
};

// 获取设备类型，返回字符串
export const getDeviceType = () => {
	const u = navigator.userAgent;
	const osType =
		u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
			? 'ANDRIOD'
			: u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
			? 'IOS'
			: 'PC';
	return osType;
};

/*rc-form 获取第一个错误 */
export const getFirstError = (error) => {
	if (error) {
		const firstErr = error[Object.keys(error)[0]].errors;

		return firstErr[0].message;
	}
	return '';
};

// 检测是否是某种浏览器
export const isSomeBrowser = (type) => {
	const u = navigator.userAgent.toLowerCase();
	return u.indexOf(type) > -1 && u.indexOf('micromessenger') <= -1;
};
//关闭view
export const closeCurrentWebView = () => {
	window.setupWebViewJavascriptBridge((bridge) => {
		bridge.callHandler('closeCurrentWebView', '', function(response) {
			console.log(response);
		});
	});
};
// 点击退出
let state = false;

export const logoutAppHandler = (that) => {
	if (isMPOS()) {
		closeCurrentWebView();
		return;
	}
	if (!state) {
		state = true;
		const ele = <div style={{ lineHeight: 3 }}>确认退出登录？</div>;
		Modal.alert('', ele, [
			{
				text: '取消',
				onPress: () => {
					state = false;
				}
			},
			{
				text: '确定',
				onPress: () => {
					state = false;
					logoutApp(that);
				}
			}
		]);
	}
};

// 定义需要拦截的路由
const interceptRouteArr = [
	'/login',
	'/home/home',
	'/order/order_page',
	'/mine/mine_page',
	// '/mine/credit_extension_page',
	'/order/repayment_succ_page',
	'/mine/credit_list_page',
	'/home/essential_information',
	'/home/real_name',
	'/home/confirm_agency',
	'/home/moxie_bank_list_page',
	'/home/loan_repay_confirm_page',
	'/home/credit_apply_succ_page',
	'/home/loan_apply_succ_page',
	'/home/crawl_progress_page',
	'/home/crawl_fail_page',
	'/order/wx_pay_success_page',
	'/protocol/pdf_page',
	'/home/loan_fenqi'
];

// 在需要路由拦截的页面 pushState
export const changeHistoryState = () => {
	if (interceptRouteArr.includes(window.location.pathname)) {
		if (store.getChkPhotoBackNew()) {
			history.go(Number(store.getChkPhotoBackNew()));
			store.removeIdChkPhotoBack();
			store.removeChkPhotoBackNew();
		} else if (store.getGoMoxie()) {
			history.go(-1);
			store.removeGoMoxie();
		} else {
			window.history.pushState(null, null, document.URL); //在IE中必须得有这两行
		}
	}
};

function S4() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

// 生成UUID,返回字符串
export const guid = () => {
	return `${S4() + S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}`;
};

// 安卓关闭页面方法
export const closePage = () => {
	if (window.Sxp) {
		return window.Sxp.closePage();
	}
	if (window.passValue) {
		return window.passValue();
	}
};
export const idChkPhoto = ({ $props, type, msg = '审核' }) => {
	return new Promise((resolve, reject) => {
		$props.$fetch.get(API.idChkPhoto).then((res) => {
			// let res = {
			// 	msgCode: 'PTM0008',
			// 	msgInfo: '用户已实名，未上传身份证照片',
			// 	data: {}
			// };

			switch (res.msgCode) {
				case 'PTM0000':
					resolve('1');
					break;
				case 'PTM0011':
					resolve('3');
					$props.toast.info('请先人脸识别认证');
					setTimeout(() => {
						$props.$fetch.post(`${API.getFace}`, {}).then((result) => {
							if (result.msgCode === 'PTM0000' && result.data) {
								$props.SXFToast.loading('加载中...', 0);
								window.location.href = result.data;
							} else {
								$props.toast.info(result.msgInfo);
							}
						});
					}, 2000);
					break;
				case 'PTM0006':
					store.setToggleMoxieCard(true);
					$props.history.push({
						pathname: '/home/real_name'
					});
					resolve('2');
					break;
				case 'PTM0008':
					if (!state) {
						state = true;
						const ele = (
							<div>
								身份证照片找不到了!
								<br />
								补充照片极速{msg}!
							</div>
						);
						Modal.alert('', ele, [
							{
								text: '关闭',
								onPress: () => {
									state = false;
								}
							},
							{
								text: '前往添加',
								onPress: () => {
									store.setToggleMoxieCard(true);
									state = false;
									$props.history.push({
										pathname: '/home/real_name',
										search: `?newTitle=实名照片补充&type=${type}`
									});
								}
							}
						]);
					}
					resolve('2');
					break;

				case 'PTM0009':
					if (!state) {
						state = true;
						const ele = (
							<div>
								身份证有效期不足30天或已过期!
								<br />
								重新补充极速{msg}!
							</div>
						);
						Modal.alert('', ele, [
							{
								text: '关闭',
								onPress: () => {
									state = false;
								}
							},
							{
								text: '前往添加',
								onPress: () => {
									state = false;
									store.setToggleMoxieCard(true);
									$props.history.push({
										pathname: '/home/real_name',
										search: `?newTitle=实名照片补充&type=${type}`
									});
								}
							}
						]);
					}
					resolve('2');
					break;

				default:
					$props.toast.info(res.msgInfo);
					reject();
					break;
			}
		});
	});
};
// 确认按钮点击事件 提交到风控
export const handleClickConfirm = ($props, repaymentDate, type) => {
	$props.SXFToast.loading('数据加载中...', 0);
	const address = store.getPosition();
	const params = {
		location: address,
		prdId: repaymentDate.prdId,
		perdLth: repaymentDate.perdLth,
		perdUnit: repaymentDate.perdUnit,
		perdCnt: repaymentDate.perdCnt,
		rpyAmt: Number(repaymentDate.rpyAmt),
		autId: repaymentDate && repaymentDate.autId
	};
	if (isMPOS()) {
		getAppsList();
		getContactsList();
	}
	$props.$fetch
		.post(`${API.submitState}`, params, { hideLoading: true })
		.then((res) => {
			$props.SXFToast.hide();
			// 提交风控返回成功
			if (res && res.msgCode === 'PTM0000') {
				buriedPointEvent(home.moneyCreditCardConfirm, {
					is_success: true,
					fail_cause: '提交成功',
					perdLth: repaymentDate.perdLth,
					rpyAmt: Number(repaymentDate.rpyAmt),
					activeName: repaymentDate.activeName
				});
				$props.toast.info(res.msgInfo);
				store.removeLoanAspirationHome();
				store.removeToggleMoxieCard();
				setTimeout(() => {
					$props.history.push({
						pathname: '/home/credit_apply_succ_page',
						search: `?noBankInfo=true&autId=${repaymentDate && repaymentDate.autId}`
					});
				}, 3000);
			} else {
				buriedPointEvent(home.moneyCreditCardConfirm, {
					is_success: false,
					fail_cause: res.msgInfo,
					perdLth: repaymentDate.perdLth,
					rpyAmt: Number(repaymentDate.rpyAmt),
					activeName: repaymentDate.activeName
				});
				$props.toast.info(res.msgInfo);
			}
		})
		.catch((err) => {
			buriedPointEvent(home.moneyCreditCardConfirm, {
				is_success: false,
				fail_cause: '未知错误',
				perdLth: repaymentDate.perdLth,
				rpyAmt: Number(repaymentDate.rpyAmt),
				activeName: repaymentDate.activeName
			});
			$props.SXFToast.hide();
			if (type) {
				$props.history.goBack();
			} else {
				$props.history.push('/home/home');
			}
		});
};
const needDisplayOptions2 = ['operator'];
export const getOperatorStatus = ({ $props }) => {
	return new Promise(async (resolve, reject) => {
		let res = await $props.$fetch.post(API.GETSTSW);
		if (res && res.msgCode === 'PTM0000') {
			res.data.forEach((item, index) => {
				if (needDisplayOptions2.includes(item.code)) {
					// case '0': // 未认证
					// case '1': // 认证中
					// case '2': // 认证成功
					// case '3': // 认证失败
					// case '4': // 认证过期
					switch (item.stsw.dicDetailCd) {
						case '0':
						case '3':
						case '4':
							resolve(false);
							$props.toast.info('身份信息确认失败，请重新确认');
							setTimeout(() => {
								// SXFToast.loading('加载中...', 0);
								$props.$fetch
									.post(`${API.getOperator}`, {
										clientCode: '04'
									})
									.then((result) => {
										if (result.msgCode === 'PTM0000' && result.data.url) {
											// $props.SXFToast.hide();
											store.setMoxieBackUrl('/home/loan_repay_confirm_page');
											// TODO
											// store.getToggleMoxieCard(true);
											// setTimeout(() => {
											// 运营商直接返回的问题
											// SXFToast.loading('加载中...', 0);
											store.setGotoMoxieFlag(true);
											window.location.href =
												result.data.url +
												`&localUrl=${window.location.origin}&routeType=${window.location.pathname}${
													window.location.search
												}&showTitleBar=NO&agreementEntryText=《个人信息授权书》&agreementUrl=${encodeURIComponent(
													`${linkConf.BASE_URL}/disting/#/carrier_auth_page`
												)}`;
										}
									});
							}, 2000);
							break;
						case '1':
							resolve(false);
							$props.toast.info('请耐心等待信息确认结果');
							break;
						case '2':
							resolve(true);
							break;

						default:
							break;
					}
				}
			});
		} else {
			$props.toast.info(res.msgInfo);
			resolve(false);
		}
	});
};
const needDisplayOptions = ['idCheck', 'basicInf', 'operator', 'card'];
export const getNextStr = async ({ $props, needReturn = false, callBack }) => {
	let codes = '';
	let codesArray = [];
	let res = await $props.$fetch.post(API.GETSTSW);
	let resBackMsg = '';
	let btnText = '';
	let orderText = 0;
	let btnArry = ['继续完善个人信息', '继续确认身份信息', '继续导入信用卡账单'];
	if (res && res.msgCode === 'PTM0000') {
		res.data.forEach((item, index) => {
			if (needDisplayOptions.includes(item.code)) {
				orderText = orderText + 1;
				if (item.stsw.dicDetailCd !== '2' && item.stsw.dicDetailCd !== '1' && !btnText) {
					btnText = btnArry[orderText - 2];
				}
				codes += item.stsw.dicDetailCd;
				codesArray.push(item.stsw.dicDetailCd);
			}
		});
		if (!needReturn) {
			if (btnText === '继续确认身份信息') {
				buriedPointEvent(home.continueRealInfo);
			} else if (btnText === '继续导入信用卡账单') {
				buriedPointEvent(home.billContinueImport);
			}
			store.setNeedNextUrl(true);
			// 实名
			if (codesArray[0] !== '2' && codesArray[0] !== '1') {
				$props.SXFToast.hide();
				let msg = '请先实名认证';
				// $props.toast.info(msg);
				// setTimeout(() => {
				$props.history.push({
					pathname: '/home/real_name',
					search: '?type=noRealName&fromRouter=home'
				});
				// }, 3000);
				return;
			}
			// 基本信息
			if (codesArray[1] !== '2' && codesArray[1] !== '1') {
				// $props.SXFToast.hide();
				let msg = '请进行基本信息认证';
				// $props.toast.info(msg);
				resBackMsg = '基本信息认证';
				// setTimeout(() => {
				$props.history.replace({
					pathname: '/home/essential_information'
					// search: urlQuery
				});
				// }, 3000);
				if (callBack) {
					callBack(resBackMsg);
				}
				return;
			}

			// 运营商前一步是成功或者审核中,可直接返回url链接
			if (codesArray[2] !== '1' && codesArray[2] !== '2') {
				$props.$fetch
					.post(`${API.getOperator}`, {
						clientCode: '04'
					})
					.then((result) => {
						if (result.msgCode === 'PTM0000' && result.data.url) {
							// $props.SXFToast.hide();
							let msg = '请进行运营商认证';
							// $props.toast.info(msg);
							resBackMsg = '运营商认证';
							// setTimeout(() => {
							// 运营商直接返回的问题
							store.setCarrierMoxie(true);
							store.setGotoMoxieFlag(true);
							// SXFToast.loading('加载中...', 0);
							window.location.href =
								result.data.url +
								`&localUrl=${window.location.origin}&routeType=${window.location.pathname}${
									window.location.search
								}&showTitleBar=NO&agreementEntryText=《个人信息授权书》&agreementUrl=${encodeURIComponent(
									`${linkConf.BASE_URL}/disting/#/carrier_auth_page`
								)}`;
							// }, 3000);
							if (callBack) {
								callBack(resBackMsg);
							}
						}
					});

				return;
			}

			// 信用卡
			if (codesArray[3] !== '1' && codesArray[3] !== '2') {
				// $props.SXFToast.hide();
				let msg = '请进行信用卡认证';
				// $props.toast.info(msg);
				resBackMsg = '银行列表';
				store.setCreditSuccessBack(true);
				// setTimeout(() => {
				$props.history.push({ pathname: '/home/moxie_bank_list_page' });
				// }, 3000);
				if (callBack) {
					callBack(resBackMsg);
				}
				return;
			}
			// 如果是银行卡则跳转到进度否则是确认借款页
			if (store.getCreditSuccessBack()) {
				// 信用卡返回跳转到进度页
				store.setToggleMoxieCard(true);
				$props.history.push('/home/crawl_progress_page');
			} else {
				$props.history.replace('/home/loan_repay_confirm_page');
			}
		}
	} else {
		Toast.info(res.msgInfo);
	}
	return {
		data: res.data,
		codes,
		codesArray,
		resBackMsg,
		btnText
	};
};

// 退出功能
export const logoutApp = (that) => {
	fetch.get(API.LOGOUT).then(
		(result) => {
			if (result && result.msgCode !== 'PTM0000') {
				result.msgInfo && Toast.info(result.msgInfo);
				return;
			}
			window.ReactRouterHistory.push('/login');
			// sessionStorage.clear();
			// localStorage.clear();
			// Cookie.remove('fin-v-card-token');
			Cookie.remove('authFlag');
			Cookie.remove('VIPFlag');
			//退出时,删除通付盾script
			document.getElementById('tonfudunScript') &&
				document.body.removeChild(document.getElementById('tonfudunScript'));
			document.getElementById('payegisIfm') &&
				document.body.removeChild(document.getElementById('payegisIfm'));
		},
		(err) => {
			err.msgInfo && Toast.info(err.msgInfo);
		}
	);
};

export const getNowDate = () => {
	var now = new Date();
	var year = now.getFullYear(); //得到年份
	var month = now.getMonth(); //得到月份
	var date = now.getDate(); //得到日期
	return `${year}${month}${date}`;
};

// 正则校验表达式
export const verifyReg = {
	phoneReg: /^[1][3,4,5,7,8][0-9]{9}$/,
	bankCardSimple: /^\d{14,25}$/
};

// 正则校验工厂函数
const verfifyFactory = (val, testReg) => {
	// 一些其他判断 。。。。
	return val !== '' && testReg.test(val);
};

// 正则校验基本类型
export const isAvailableFun = {
	phone(val, testReg = verifyReg.phoneReg) {
		return verfifyFactory(val, testReg);
	},
	bankCardSimple(val, testReg = verifyReg.bankCardSimple) {
		return verfifyFactory(val, testReg);
	}
};

export const validators = {
	number: (val) => /^[0-9]*$/.test(val),
	bankCardNumber: (val) => /^\d{16}|\d{24}$/.test(val), // 银行卡号 val.replace(/\s+/g, "")
	phone: (val) => /^1\d{10}$/.test(val), // 手机为以1开头的11位数字
	iDCardNumber: (val) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val), // 身份证 中国的身份证号，一代身份证号是15位的数字，二代身份证都是18位的，最后一位校验位除了可能是数字还可能是‘X‘或‘x‘，所以有四种可能性：a.15位数字 b.18位数字 c.17位数字，第十八位是‘X‘ d.17位数字，第十八位是‘x‘
	enLength: (val, min, max) => {
		// 英文字符长度校验
		if (val.replace(/(^\s*)|(\s*$)/g, '') === '') {
			// /^(?!(\s+$))/
			return false;
		} else if (min) {
			if (val.length < min) {
				return false;
			} else if (max) {
				if (val.length > max) {
					return false;
				}
				return true;
			}
			return true;
		}
	},
	name: (val) => /^([\u4e00-\u9fa5]){2,20}$/.test(val),
	chLength: (val, min, max) => {
		// 中文字符长度校验121
		let minNum = min || 1;
		let maxNum = max || 100000;
		let chReg = new RegExp(`^(([\u4e00-\u9fa5])|(\\.)|(\\·)){${minNum},${maxNum}}$`);
		return chReg.test(val);
	}
};

function clearAllCookie() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--; ) document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	}
}
export const vconsole = (i, consoleshow) => {
	if ((i && i.length === 10 && i === '0110001111') || consoleshow || sessionStorage.getItem('consoleshow')) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://cdn.bootcss.com/vConsole/2.0.1/vconsole.min.js';
		head.appendChild(script);
		store.setConsoleshow(true);
	} else if (
		(i && i.length === 10 && i === '1111000110') ||
		consoleshow ||
		sessionStorage.getItem('consoleshow')
	) {
		localStorage.clear();
		sessionStorage.clear();
		clearAllCookie();
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://cdn.bootcss.com/vConsole/2.0.1/vconsole.min.js';
		head.appendChild(script);
		store.setConsoleshow(true);
	}
};

// 是否可以借款
export const isCanLoan = ({ $props, usrIndexInfo, goMoxieBankList }) => {
	let state = true;
	const { indexData = {} } = usrIndexInfo;
	const { cardBillSts, cardBillAmt, billRemainAmt } = indexData;
	if (indexData && indexData.persionCheck && indexData.persionCheck === '00') {
		$props.toast.info(`非本人信用卡，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		return;
	} else if (
		(indexData && indexData.buidSts && indexData.buidSts === '02') ||
		(indexData && indexData.cardBinSupport && indexData.cardBinSupport === '00')
	) {
		$props.toast.info(`暂不支持当前信用卡，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		return;
	} else if (indexData && indexData.cardBillCheck && indexData.cardBillCheck === '00') {
		$props.toast.info(`未生成账单，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		return;
	} else if (
		indexData &&
		cardBillSts === '01' &&
		(billRemainAmt === 0 || (billRemainAmt && Number(billRemainAmt) <= 0))
	) {
		$props.toast.info(`账单已结清，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		state = false;
	} else if (
		indexData &&
		cardBillSts === '01' &&
		(cardBillAmt === 0 || (cardBillAmt && Number(cardBillAmt) <= 0))
	) {
		$props.toast.info(`账单已结清，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		state = false;
	} else if (
		cardBillSts === '01' &&
		indexData &&
		(billRemainAmt !== 0 && billRemainAmt !== '0') &&
		billRemainAmt &&
		Number(indexData.minApplAmt) > Number(billRemainAmt)
	) {
		$props.toast.info(`账单低于最低可借金额：${indexData.minApplAmt}元，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		state = false;
	} else if (
		cardBillSts === '01' &&
		indexData &&
		!billRemainAmt &&
		cardBillAmt &&
		cardBillAmt !== 0 &&
		Number(indexData.minApplAmt) > Number(cardBillAmt)
	) {
		$props.toast.info(`账单低于最低可借金额：${indexData.minApplAmt}元，请代偿其他信用卡`, 2, () => {
			// 跳新版魔蝎
			goMoxieBankList();
		});
		state = false;
	}
	if (state) {
		//卡可以提交埋点
		buriedPointEvent(home.selectCreditCardResult, {
			is_success: true,
			bank_name: indexData.bankName
		});
	} else {
		//卡不可以提交埋点
		buriedPointEvent(home.selectCreditCardResult, {
			is_success: false,
			bank_name: indexData.bankName
		});
	}
	return state;
};

//函数防抖
export const debounce = (method, delay) => {
	let timer = null;
	return function() {
		var context = this,
			args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function() {
			method.apply(context, args);
		}, delay);
	};
};

export const generateRandomPhone = () => {
	const chars = ['3', '5', '7', '8'];
	return `1${chars[Math.ceil(Math.random() * 3)]}${Math.ceil(Math.random() * 9)}****${Math.ceil(
		Math.random() * 9
	)}${Math.ceil(Math.random() * 9)}${Math.ceil(Math.random() * 9)}${Math.ceil(Math.random() * 9)}`;
};

// 判断活动是否过期
export const checkEngaged = ({ $props, AcCode }) => {
	return new Promise((resolve, reject) => {
		$props.$fetch
			.get(`${API.checkEngaged}/${AcCode}`)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

// 判断活动是否参与

export const checkIsEngagedUser = ({ $props, AcCode }) => {
	return new Promise((resolve, reject) => {
		$props.$fetch
			.get(`${API.checkIsEngagedUser}/${AcCode}`)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

// 参与活动

export const saveUserInfoEngaged = ({ $props, AcCode }) => {
	return new Promise((resolve, reject) => {
		$props.$fetch
			.get(`${API.saveUserInfoEngaged}/${AcCode}`)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

// 查询两个日期相差的天数
export const dateDiffer = (sDate1, sDate2) => {
	//sDate1和sDate2是2006/12/18格式
	var dateSpan, iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays;
};
export const getMoxieData = ({ $props, bankCode, goMoxieBankList }) => {
	$props.$fetch
		.get(API.mxoieCardList)
		.then((res) => {
			if (res && res.msgCode === 'PTM0000') {
				if (res.data) {
					const seleBank = res.data.filter((ele, index, array) => {
						return ele.code === bankCode;
					});
					const jumpUrl = seleBank && seleBank.length && seleBank[0].href;
					if (jumpUrl) {
						store.setGotoMoxieFlag(true);
						store.setAutId(seleBank[0].authorId);
						store.setMoxieBackUrl(`/home/crawl_progress_page`);
						// 如果银行code一致跳登录页，否则跳列表页
						window.location.href =
							jumpUrl +
							`&showTitleBar=NO&agreementEntryText=《个人信息授权书》&agreementUrl=${encodeURIComponent(
								`${linkConf.BASE_URL}/disting/#/internet_bank_auth_page`
							)}`;
					} else {
						goMoxieBankList();
					}
				} else {
					$props.toast.info('系统开小差，请稍后重试');
				}
			} else {
				$props.toast.info(res.msgInfo);
			}
		})
		.catch((err) => {
			console.log(err);
			$props.toast.info('系统开小差，请稍后重试');
		});
};
