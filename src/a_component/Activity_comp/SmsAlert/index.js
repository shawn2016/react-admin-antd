import React, { Component } from 'react';
import { Button, Modal, InputItem, Toast, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import style from './index.scss';
import logo from './img/black_logo.png';
import { getDeviceType, getFirstError, validators, handleInputBlur } from '../../../util';
import { getH5Channel } from '../../../util/common';
import { store } from '../../../util/store';
import fetch from 'sx-fetch';
import qs from 'qs';
import Cookie from 'js-cookie';

const API = {
	smsForLogin: '/signup/smsForLogin',
	sendsms: '/cmm/sendsms',
	validateMposRelSts: '/authorize/validateMposRelSts',
	chkAuth: '/authorize/chkAuth',
	doAuth: '/authorize/doAuth'
};
let timmer;
@fetch.inject()
@createForm()
export default class SmsAlert extends Component {
	// static propTypes = {
	// 	goSubmitCb: PropTypes.object,
	// 	validateMposCb: PropTypes.object,
	// 	chkAuthCb: PropTypes.object,
	// 	doAuthCb: PropTypes.object,
	// 	goLoginCb: PropTypes.object,
	// 	smsSuccess: PropTypes.func,
	// };

	static defaultProps = {
		goSubmitCb: {
			PTM0000: () => {},
			URM0008: () => {},
			others: () => {}
		},
		validateMposCb: {
			URM0000: () => {},
			PTM9000: () => {},
			others: () => {}
		},
		chkAuthCb: {
			authFlag0: () => {},
			authFlag1: () => {},
			authFlag2: () => {},
			others: () => {}
		},
		doAuthCb: {
			authSts01: () => {},
			authSts00: () => {},
			others: () => {}
		},
		goLoginCb: {
			PTM0000: () => {},
			others: () => {},
			URM0008: () => {}
		},
		smsSuccess: () => {}
	};
	constructor(props) {
		super(props);
		this.state = {
			smsText: '获取验证码',
			timeflag: true,
			modalShow: false,
			disabled: false,
			mblNoHid: '',
			smsProps_disabled: false,
			loginProps_disabled: false,
			smsJrnNo: '', // 短信流水号
			otherProps_type: '', // 传递过来的参数
			loginProps_needLogin: false, // 是登陆不是短验
			loginProps_needLogin_copy: false,
			isShowMobile: false, // 是否需要展示
		};
	}
	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		clearInterval(timmer);
	}
	// 校验手机号
	validatePhone = (rule, value, callback) => {
		if (!validators.phone(value)) {
			callback('请输入正确手机号');
		} else {
			callback();
		}
	};
	//获取手机验证码
	getSms(i) {
		if (!this.getSmsCode(i)) {
			return;
		}
	}
	getSmsCode(i) {
		this.props.form.validateFields((err, values) => {
			if (err && err.smsCd) {
				delete err.smsCd;
			}
			if (!err || JSON.stringify(err) === '{}') {
				// 发送验证码
				this.props.$fetch
					.post(API.sendsms, {
						type: '5',
						authToken: this.state.authToken
					})
					.then(
						(result) => {
							if (result.msgCode !== 'PTM0000') {
								Toast.info(result.msgInfo);
								return;
							} else {
								Toast.info('发送成功，请注意查收！');
								this.setState({ timeflag: false, smsJrnNo: result.data.smsJrnNo });
								timmer = setInterval(() => {
									this.setState({ flag: false, smsText: i-- + '"' });
									if (i === -1) {
										clearInterval(timmer);
										this.setState({ smsText: '重新获取', timeflag: true, flag: true });
									}
								}, 1000);
							}
						},
						(error) => {
							error.msgInfo && Toast.info(error.msgInfo);
						}
					);
				return true;
			} else {
				Toast.info(getFirstError(err));
			}
		});
	}
	//登录判断
	goSubmit = () => {
		const { goSubmitCb, smsSuccess } = this.props;
		const { otherProps_type } = this.state;
		if (!this.state.smsJrnNo) {
			Toast.info('请先获取短信验证码');
			return;
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.$fetch
					.post(API.doAuth, {
						authToken: this.state.authToken,
						location: store.getPosition(), // 定位地址 TODO 从session取,
						osType: getDeviceType(),
						smsCd: values.smsCd,
						smsJrnNo: this.state.smsJrnNo,
						smsFlg: 'Y'
					})
					.then(
						(res) => {
							if (res.msgCode === 'PTM0000') {
								goSubmitCb.PTM0000 && goSubmitCb.PTM0000(res, otherProps_type);
								// sa.login(res.userId);
								Cookie.set('fin-v-card-token', res.loginToken, { expires: 365 });
								// TODO: 根据设备类型存储token
								store.setMposToken(true);
								smsSuccess && smsSuccess();
								store.setToken(res.loginToken);
								this.closeCb();
								// refreshPageFn();
							} else if (
								res.msgCode === 'URM0008' ||
								res.msgCode === 'PCC-UMS-0013' ||
								res.msgCode === 'PTM3011'
							) {
								goSubmitCb.URM0008 && goSubmitCb.URM0008(res, otherProps_type);
								Toast.info(res.msgInfo);
								this.props.form.setFieldsValue({
									smsCd: ''
								});
							} else {
								goSubmitCb.others && goSubmitCb.others(res, otherProps_type);
								this.closeCb();
							}
						},
						(err) => {
							Toast.info(err.msgInfo);
						}
					);
			} else {
				Toast.info(getFirstError(err));
			}
		});
	};
	closeCb = () => {
		this.setState({
			modalShow: false
		});
	};
	// 实名
	validateMposRelSts = ({
		smsProps_disabled = true,
		loginProps_disabled = true,
		loginProps_needLogin = false,
		otherProps_type = 'home'
	}) => {
		const { validateMposCb } = this.props;
		this.setState({
			smsProps_disabled,
			loginProps_needLogin,
			loginProps_needLogin_copy: loginProps_needLogin,
			loginProps_disabled
		});
		const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
		this.props.$fetch
			.post(API.validateMposRelSts, {
				appid: query.appId,
				token: query.token
			})
			.then((res) => {
				if (res.msgCode === 'URM0000') {
					validateMposCb.URM0000 && validateMposCb.URM0000(res, otherProps_type);
					this.chkAuth(otherProps_type);
				} else if (res.msgCode === 'PTM9000' || res.msgCode === 'URM0001') {
					validateMposCb.PTM9000 && validateMposCb.PTM9000(res, otherProps_type);
				} else {
					validateMposCb.others && validateMposCb.others(res, otherProps_type);
					// Toast.info(res.msgInfo);
				}
			});
	};

	chkAuth = (otherProps_type) => {
		const { chkAuthCb, smsSuccess, isShowMobModal } = this.props;
		const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
		this.props.$fetch
			.post(API.chkAuth, {
				mblNo: query.telNo,
				appId: query.appId,
				token: query.token,
				location: store.getPosition(), // 定位地址 TODO 从session取,
				osType: getDeviceType(),
				province: '',
				usrCnl: getH5Channel()
			})
			.then((res) => {
                //  未授权
				if (res.authFlag === '0') {
					chkAuthCb.authFlag0 && chkAuthCb.authFlag0(res, otherProps_type);
					this.setState({
						authToken: res.tokenId,
						mblNoHid: res.mblNoHid
					});
					if (isShowMobModal) {
						this.setState({
							modalShow: true,
							isShowMobile: true,
							otherProps_type,
						});
					} else {
						this.doAuth(res.tokenId, otherProps_type);
					}
				} else if (res.authFlag === '1') {
					// 已授权
					store.setMposToken(true);
					smsSuccess && smsSuccess();
					Cookie.set('fin-v-card-token', res.loginToken, { expires: 365 });
					store.setToken(res.loginToken);
					chkAuthCb.authFlag1 && chkAuthCb.authFlag1(res, otherProps_type);
					this.setState({
						loginProps_needLogin_copy: false
					});
				}  else {
					if (this.state.loginProps_needLogin) {
						// 授权失败的话都跳转到登陆页(如果返回值有mblNoHid) 暂时注释
						if (res.mblNoHid && res.tokenId) {
							this.setState({
                                authToken:res.tokenId,
                                mblNoHid:res.mblNoHid,
								modalShow: true,
								disabled: this.state.loginProps_disabled,
								loginProps_needLogin_copy: true,
								loginProps_needLogin: this.state.loginProps_needLogin, // 跳转登陆而非短验
								otherProps_type,
								isShowMobile: false,
							});
							this.props.form.setFieldsValue({
								phoneValue: res.mblNoHid,
								smsCd: ''
							});
						} else {
							Toast.info(res.msgInfo);
						}
					}
					chkAuthCb.others && chkAuthCb.others(res, otherProps_type);
				}
			});
	};
	// 去授权
	doAuth = (token, otherProps_type) => {
		const { doAuthCb, smsSuccess } = this.props;
		this.props.$fetch
			.post(API.doAuth, {
				location: store.getPosition(), // 定位地址 TODO 从session取,
				osType: getDeviceType(),
				authToken: token
			})
			.then(
				(res) => {
					if (res.authSts === '01') {
						// 短验
						doAuthCb.authSts01 && doAuthCb.authSts01(res, otherProps_type);
						this.setState({
							modalShow: true,
							otherProps_type,
							loginProps_needLogin_copy: false,
							isShowMobile: false,
							disabled: true,
						});
						this.props.form.setFieldsValue({
							phoneValue: res.mblNoHid,
							smsCd: ''
						});
					} else if (res.authSts === '00') {
						// 授权成功
						doAuthCb.authSts00 && doAuthCb.authSts00(res, otherProps_type);
						// sa.login(res.userId);
						store.setMposToken(true);
						smsSuccess && smsSuccess();
						Cookie.set('fin-v-card-token', res.loginToken, { expires: 365 });
						store.setToken(res.loginToken);
						this.setState({
							loginProps_needLogin_copy: false
						});
					} else {
						if (this.state.loginProps_needLogin) {
							// 授权失败的话都跳转到登陆页(如果返回值有mblNoHid) 暂时注释
							if (res.mblNo) {
								this.setState({
									modalShow: true,
									disabled: this.state.loginProps_disabled,
									loginProps_needLogin_copy: true,
									loginProps_needLogin: this.state.loginProps_needLogin, // 跳转登陆而非短验
									otherProps_type,
									isShowMobile: false,
								});
								this.props.form.setFieldsValue({
									phoneValue: this.state.mblNoHid,
									smsCd: ''
								});
							} else {
								Toast.info(res.msgInfo);
							}
						}
						doAuthCb.others && doAuthCb.others(res, otherProps_type);
					}
				},
				(err) => {
					Toast.info(err.msgInfo);
				}
			);
	};
	// 确定去登陆按钮
	goLogin = () => {
		const { goLoginCb, smsSuccess } = this.props;
		const { otherProps_type } = this.state;
		if (!this.state.smsJrnNo) {
			Toast.info('请先获取短信验证码');
			return;
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.$fetch
					.post(API.smsForLogin, {
						location: store.getPosition(), // 定位地址 TODO 从session取,
						osType: getDeviceType(),
						smsCd: values.smsCd,
						smsJrnNo: this.state.smsJrnNo,
						smsFlg: 'Y'
					})
					.then(
						(res) => {
							if (res.msgCode === 'PTM0000') {
								goLoginCb.PTM0000 && goLoginCb.PTM0000(res, otherProps_type);
								// sa.login(res.userId);
								store.setMposToken(true);
								smsSuccess && smsSuccess();
								Cookie.set('fin-v-card-token', res.data.tokenId, { expires: 365 });
								// TODO: 根据设备类型存储token
								store.setToken(res.data.tokenId);
								this.closeCb();
								// refreshPageFn();
							} else if (
								res.msgCode === 'URM0008' ||
								res.msgCode === 'PCC-UMS-0013' ||
								res.msgCode === 'PTM3011'
							) {
								goLoginCb.URM0008 && goLoginCb.URM0008(res, otherProps_type);
								Toast.info(res.msgInfo);
								this.props.form.setFieldsValue({
									smsCd: ''
								});
							} else {
								goLoginCb.others && goLoginCb.others(res, otherProps_type);
								// Toast.info('暂无活动资格');
								this.closeCb();
							}
						},
						(err) => {
							Toast.info(err.msgInfo);
						}
					);
			} else {
				Toast.info(getFirstError(err));
			}
		});
	};
	// 验证验证码
	verifyVerifyCode = (rule, value, callback) => {
		if (value && value.length !== 6) {
			callback('请输入正确验证码');
		} else {
			callback();
		}
	};
	// 点击按钮进行授权
	btnHandler = () => {
		const { modalBtnBuryPoint } = this.props;
		const { authToken, otherProps_type } = this.state;
		modalBtnBuryPoint(); // 埋点需求
		this.props.form.validateFields((err, values) => {
			if (err && err.smsCd) {
				delete err.smsCd;
			}
			if (err && err.phoneValue) {
				delete err.phoneValue;
			}
			if (!err || JSON.stringify(err) === '{}') {
				this.doAuth(authToken, otherProps_type)
				this.closeCb();
			} else {
				Toast.info(getFirstError(err));
			}
		});
	}
	render() {
		const { getFieldProps } = this.props.form;
		const { smsText, timeflag, loginProps_needLogin,loginProps_needLogin_copy, isShowMobile } = this.state;
		return (
			<Modal
				className="alert_sms"
				visible={this.state.modalShow}
				transparent
				// onClose={this.onClose('modalShow')}
			>
				<div className={style.login_alert}>
					<div className={style.logo_box}>
						<Icon type="cross" onClick={this.closeCb} className={style.close_icon} />
						<img className={style.logo} src={logo} />
						<div className={style.text}>怕逾期，用还到</div>
					</div>
					{
						isShowMobile ?
						<div>
							<InputItem
								maxLength={11}
								type="number"
								{...getFieldProps('userPhone', {
									rules: [
										{ required: true, message: '请输入正确手机号' },
										{ validator: this.validatePhone }
									]
								})}
								className={style.form_control}
								placeholder="请输入注册随行付PLUS的手机号"
								onBlur={() => {
									handleInputBlur();
								}}
							/>

							<div className={style.btn_box}>
								<Button
									onClick={
										this.btnHandler
									}
									className={style.btn_primary}
									type="primary"
								>
									确定
								</Button>
							</div>
						</div>
						:
						<div>
							<InputItem
								maxLength={11}
								type="number"
								disabled={this.state.disabled}
								{...getFieldProps('phoneValue', {
									rules: [
										{ required: true, message: '请输入正确手机号' },
										{ validator: !this.state.disabled && this.validatePhone }
									]
								})}
								className={style.form_control}
								placeholder="请输入手机号码"
								onBlur={() => {
									handleInputBlur();
								}}
							/>
							<div className={style.get_sms_box}>
								<InputItem
									maxLength={6}
									type="number"
									{...getFieldProps('smsCd', {
										rules: [
											{ required: true, message: '请输入正确验证码' },
											{ validator: this.verifyVerifyCode }
										]
									})}
									className={style.form_control}
									placeholder="请输入验证码"
									onBlur={() => {
										handleInputBlur();
									}}
								/>
								<div className={style.sms_text}>
									<span
										className={!timeflag ? style.sms_text_dis : ''}
										onClick={() => {
											timeflag ? this.getSms(60) : '';
										}}
									>
										{smsText}
									</span>
								</div>
							</div>

							<div className={style.btn_box}>
								<Button
									onClick={
										loginProps_needLogin_copy && loginProps_needLogin ? this.goLogin : this.goSubmit
									}
									className={style.btn_primary}
									type="primary"
								>
									确定
								</Button>
							</div>
						</div>
					}
				</div>
			</Modal>
		);
	}
}
