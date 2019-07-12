import React, { PureComponent } from 'react';
import qs from 'qs';
import styles from './index.scss';
import btn_bg from './img/btn_bg.png';
import intro_box from './img/intro_box.png';
import intro_img from './img/intro_img.png';
import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';
import banner3 from './img/banner3.png';
import { buriedPointEvent } from 'utils/analytins';
import { activity } from 'utils/analytinsType';
import SmsAlert from '../components/SmsAlert';
import Alert_mpos from 'pages/mpos/mpos_no_realname_alert_page';
import fetch from 'sx-fetch';

const API = {
	joinActivity: '/activeConfig/partake'
};

@fetch.inject()
export default class koubei_page extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isSelProtocal: true
		};
	}

	componentDidMount() {
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		if (queryData.entry) {
			buriedPointEvent(activity.koubeiEntry, {
				entry: queryData.entry
			});
		}
	}

	// 跳转协议
	go = (url) => {
		this.props.history.push(`/protocol/${url}`);
	};

	// 进入首页
	goHomePage = () => {
		this.props.$fetch
			.post(API.joinActivity, {
				activeId: 'AC002'
			})
			.then((res) => {
				this.props.history.push('/home/home');
			})
			.catch((err) => {
				this.props.history.push('/home/home');
			});
	};

	// 还到体验
	joinNow = () => {
		buriedPointEvent(activity.koubeiBtnClick);
		if (!this.state.isSelProtocal) {
			this.props.toast.info('请先勾选协议');
			return;
		}
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		if (queryData.appId && queryData.token) {
			this.child.validateMposRelSts({
				smsProps_disabled: true,
				loginProps_disabled: true,
				loginProps_needLogin: true,
				otherProps_type: 'home'
			});
		} else {
			this.setState({
				showLoginTip: true
			});
		}
	};

	onRef = (ref) => {
		this.child = ref;
	};

	checkAgreement = () => {
		this.setState({
			isSelProtocal: !this.state.isSelProtocal
		});
	};

	closeTip = () => {
		this.setState({
			showLoginTip: false
		});
	};

	render() {
		const { showLoginTip, isSelProtocal, showBoundle } = this.state;
		return (
			<div className={styles.pinpai}>
				<SmsAlert
					onRef={this.onRef}
					goSubmitCb={{
						PTM0000: (res, getType) => {
							this.goHomePage();
						},
						URM0008: (res, getType) => {},
						others: (res, getType) => {
							this.props.toast.info(res.msgInfo);
						}
					}}
					goLoginCb={{
						PTM0000: (res, getType) => {
							this.goHomePage();
						},
						URM0008: (res, getType) => {},
						others: (res, getType) => {
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
							// this.props.toast.info('暂无活动资格');
						},
						others: (res, getType) => {}
					}}
					doAuthCb={{
						authSts00: (res, getType) => {
							this.goHomePage();
						},
						others: (res, getType) => {}
					}}
				/>
				<img src={btn_bg} onClick={this.joinNow} className={styles.entryBtn} alt="按钮" />
				<img src={banner1} className={styles.banner_bg} />
				<img src={banner2} className={styles.banner_bg} />
				<img src={banner3} className={styles.banner_bg} />
				<img src={intro_img} className={styles.proIntro} alt="产品介绍" />
				<img src={intro_box} className={styles.proDesc} alt="产品介绍" />
				<div className={styles.protocolBox}>
					<i
						className={isSelProtocal ? styles.checked : `${styles.checked} ${styles.nochecked}`}
						onClick={this.checkAgreement}
					/>
					<span className={styles.specailColor}>阅读并接受</span>
					<span
						onClick={() => {
							this.go('register_agreement_page');
						}}
					>
						《随行付金融用户注册协议》
					</span>
					<span
						onClick={() => {
							this.go('privacy_agreement_page');
						}}
					>
						《随行付用户隐私权政策》
					</span>
				</div>
				{showLoginTip && (
					<div className={styles.modal}>
						<div className={styles.mask}></div>
						<div className={[styles.modalWrapper, styles.tipWrapper].join(' ')}>
							<div className={styles.tipText}>
								<span>小主～</span>
								<br />
								<span>先去登录才能参与活动哦～</span>
							</div>
							<div className={styles.closeBtn} onClick={this.closeTip}></div>
						</div>
					</div>
				)}
				{showBoundle ? <Alert_mpos /> : null}
			</div>
		);
	}
}
