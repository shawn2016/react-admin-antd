import React, { PureComponent } from 'react';
import qs from 'qs';
import { store } from "../../../../util/store";
import { Icon } from 'antd-mobile';
import Activity_temp from "../../../../a_component/Activity_temp";
import styles from './index.scss';
import activity_bg from './img/activity_bg.png';
import activity_bg_bottom from './img/activity_bg_bottom.png';
import new_bg from './img/new_entry.png';
import new_btn from './img/new_btn.png';
import old_bg from './img/old_entry.png';
import old_btn from './img/old_btn.png';
import rule_bg from './img/rule_bg.png';
import { buriedPointEvent } from '../../../../util/analytins';
import { activity } from '../../../../util/analytinsType';
import { headerIgnore } from '../../../../util';
import fetch from 'sx-fetch';
import SmsAlert from "../../../../a_component/Activity_comp/SmsAlert";
import Cookie from 'js-cookie';
import { isMPOS } from '../../../../util/common';
import LoginAlert from './components/LoginAlert';
import PrizeModal from './components/PrizeModal';
import Alert_mpos from '../../../../a_component/Activity_comp/mpos_no_realname_alert_page';

const API = {
	joinActivity: '/activeConfig/join' // 参加活动 里面会判断用户有没有资格
};

@fetch.inject()
export default class wuyuekh_page extends Activity_temp {
	constructor(props) {
		super(props);
		this.state = {
			showRuleModal: false,
			isShowLogin: false, // 公众号显示登陆弹框
			showLoginTip: false, // mpos开屏进入时是否登陆弹框
			showBoundle: false, // 是否展示未实名的弹框
			prizeType: '', // 首复贷用户获奖
			// prizeType: 'first',
			clickType: '' // 点击首复贷
		};
	}

	componentDidMount() {
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		if (queryData.entry) {
			buriedPointEvent(activity.mianxi715Entry, {
				entry: queryData.entry
			});
		}
	}

	goTo = (type) => {
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		if (type === '0') {
			// type 0:首贷 1:复贷
			buriedPointEvent(activity.mianxi715NewBtn);
		} else {
			buriedPointEvent(activity.mianxi715OldBtn);
		}

		this.setState(
			{
				clickType: type
			},
			() => {
				if (isMPOS() && queryData.entry && queryData.entry.indexOf('ismpos_') > -1) {
					if (queryData.appId && queryData.token) {
						this.getStatus();
					} else {
						this.setState({
							showLoginTip: true
						});
					}
				} else if (Cookie.get('fin-v-card-token')) {
					store.setToken(Cookie.get('fin-v-card-token'));
					this.goHomePage();
				} else {
					this.setState({
						isShowLogin: true
					});
				}
			}
		);
	};

	getStatus = () => {
		this.child.validateMposRelSts({
			smsProps_disabled: true,
			loginProps_disabled: true,
			loginProps_needLogin: true,
			otherProps_type: 'home'
		});
	};

	onRef = (ref) => {
		this.child = ref;
	};

	goHomePage = () => {
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		const { clickType } = this.state;
		// clickType  0:首贷 1:复贷
		this.props.$fetch.get(`${API.joinActivity}/${clickType}`).then((res) => {
			if (res && res.msgCode === 'PTM0000') {
				if (clickType === '0') {
					this.setState({
						prizeType: 'first'
					});
				} else {
					this.setState({
						prizeType: 'more'
					});
				}
				// this.props.toast.info('参与成功', 2, () => {
				// 	this.props.history.push('/home/home');
				// });
			} else if (res && (res.msgCode === 'MX0002' || res.msgCode === 'MX0003')) {
				// DRAW_NOT_MATCH("MX0001", "暂不可领取，请尝试领取另一张"),
				// DRAW_NOT_ALLOWED("MX0002", "暂无领取资格"),
				// HAVE_DRAW("MX0003", "您已领取过,快去借款吧")
				// ACTIVITY_OUT_TIME("PTM7007","活动已过期")
				this.props.toast.info(res.msgInfo, 2, () => {
					this.jumpToHome();
				});
			} else if (res && (res.msgCode === 'PTM0100' || res.msgCode === 'PTM1000')) {
				this.props.toast.info(res.msgInfo, 2, () => {
					Cookie.remove('fin-v-card-token');
					sessionStorage.clear();
					localStorage.clear();
					this.goTo(clickType);
				});
			} else {
				if (
					queryData &&
					queryData.entry &&
					queryData.entry.indexOf('ismpos_') > -1 &&
					(res && res.msgCode !== 'MX0001')
				) {
					this.props.toast.info(res.msgInfo, 2, () => {
						this.jumpToHome();
					});
				} else {
					this.props.toast.info(res.msgInfo);
				}
			}
		});
	};

	closeTip = () => {
		this.setState({
			showLoginTip: false
		});
	};

	closeLoginModal = () => {
		this.setState({
			isShowLogin: false
		});
	};

	closeRuleModal = () => {
		this.setState({
			showRuleModal: false
		});
	};

	jumpToHome = () => {
		this.props.history.push('/home/home');
	};

	// 点击奖品弹框里的立即使用
	useNowClick = () => {
		const { clickType } = this.state;
		if (clickType === '0') {
			// clickType 0:首贷 1:复贷
			buriedPointEvent(activity.mianxi715NewPrizeBtn);
		} else {
			buriedPointEvent(activity.mianxi715OldPrizeBtn);
		}
		this.jumpToHome();
	};

	// 关闭奖品弹框
	closePrizeModal = () => {
		this.setState({
			prizeType: ''
		});
	};

	render() {
		const { isShowLogin, showLoginTip, showBoundle, prizeType } = this.state;
		return (
			<div
				className={ styles.wuyuekh_page}
			>
				<SmsAlert
					onRef={this.onRef}
					goSubmitCb={{
						PTM0000: (res, getType) => {
							this.goHomePage();
						},
						URM0008: (res, getType) => {},
						others: (res, getType) => {
							// this.props.toast.info('暂无领取资格');
							this.props.toast.info(res.msgInfo);
						}
					}}
					goLoginCb={{
						PTM0000: (res, getType) => {
							this.goHomePage();
						},
						URM0008: (res, getType) => {},
						others: (res, getType) => {
							// this.props.toast.info('暂无领取资格');
							this.props.toast.info(res.msgInfo);
						}
					}}
					validateMposCb={{
						PTM9000: (res, getType) => {
							this.props.history.replace('/mpos/mpos_ioscontrol_page');
						},
						others: (res, getType) => {
							this.setState({
								showBoundle: true
							});
						}
					}}
					chkAuthCb={{
						authFlag0: (res, getType) => {},
						authFlag1: (res, getType) => {
							this.goHomePage();
						},
						authFlag2: (res, getType) => {
							// this.props.toast.info('暂无领取资格');
						},
						others: (res, getType) => {
							// this.props.toast.info('暂无领取资格');
						}
					}}
					doAuthCb={{
						authSts00: (res, getType) => {
							this.goHomePage();
						},
						others: (res, getType) => {
							// this.props.toast.info('暂无领取资格');
						}
					}}
					modalBtnBuryPoint={this.confirmHandler}
				/>
				<img src={activity_bg} className={styles.activity_bg} />
				<img src={activity_bg_bottom} className={styles.bg_bottom} />
				<div className={styles.new_entry_box}>
					<img src={new_bg} className={styles.entry_bg} />
					<img
						src={new_btn}
						onClick={() => {
							this.goTo('0');
						}}
						className={styles.btn_style}
					/>
				</div>
				<div className={styles.old_entry_box}>
					<img src={old_bg} className={styles.entry_bg} />
					<img
						src={old_btn}
						onClick={() => {
							this.goTo('1');
						}}
						className={styles.btn_style}
					/>
				</div>
				{/* 活动规则 */}
				<div
					className={styles.rule}
					onClick={() => {
						this.setState({
							showRuleModal: true
						});
					}}
				>
					<img src={rule_bg} />
				</div>
				{isShowLogin && <LoginAlert smsSuccess={this.goHomePage} closeModal={this.closeLoginModal} />}
				{this.state.showRuleModal ? (
					<div className={styles.modal}>
						<div className={styles.mask} />
						<div className={styles.modalWrapper}>
							<Icon type="cross" color="#333" className={styles.closeBtn} onClick={this.closeRuleModal} />
							<h2>活动规则</h2>
							<div className={styles.rulesCont}>
								<h3>活动时间：</h3>
								<p>2019年7月19日起</p>
								<h3>活动规则：</h3>
								<p>1.活动期间，同一用户仅限领取一次免息券；</p>
								<p>2.请在规定时间内使用免息券，过期失效视为放弃；</p>
								<p>3.免息券请在借款时使用，首期免息券免除首期利息；</p>
								<p>4.88元免息券免除首期利息最高88元，超过88元不予免除；</p>
								<p style={{ textAlign: 'center' }}>
									如有疑问，请致电客服
									<br />
									400-088-7626
								</p>
							</div>
						</div>
					</div>
				) : null}
				{showLoginTip && (
					<div className={styles.modal}>
						<div className={styles.mask} />
						<div className={[styles.modalWrapper, styles.tipWrapper].join(' ')}>
							<div className={styles.tipText}>
								<span>小主～</span>
								<br />
								<span>活动火热进行中，快前往「还到」参与！</span>
							</div>
							<div className={styles.closeBtnStyle} onClick={this.closeTip} />
						</div>
					</div>
				)}
				{showBoundle ? <Alert_mpos /> : null}
				{prizeType ? (
					<PrizeModal clickCb={this.useNowClick} closeCb={this.closePrizeModal} type={prizeType} />
				) : null}
			</div>
		);
	}
}
