import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, InputItem, Toast, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import style from './index.scss';
import logo from '../../../../../../assets/images/common/black_logo.png';
import { getDeviceType, getFirstError, validators, handleInputBlur } from '../../../../../../util';
import { getH5Channel } from '../../../../../../util/common';
import { store } from '../../../../../../util/store';
import fetch from 'sx-fetch';
import qs from 'qs';
import Cookie from 'js-cookie';
import { buriedPointEvent } from '../../../../../../util/analytins';
import { activity } from '../../../../../../util/analytinsType';

const API = {
	smsForLogin: '/signup/smsForLogin',
	sendsms: '/cmm/sendsms',
	imageCode: '/signup/sendImg'
};
let timmer;
@fetch.inject()
@createForm()
export default class LoginAlert extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smsText: '获取验证码',
			timeflag: true,
			mblNoHid: '',
			smsJrnNo: '', // 短信流水号
			modalShow: true,
			imageCodeUrl: '' // 图片验证码url
		};
	}
	componentWillMount() {
		this.getImage();
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
						type: '6',
						mblNo: values.phoneValue,
						osType: getDeviceType(), // 操作系统
						imgCode: values.imgCd
					})
					.then(
						(result) => {
							if (result.msgCode !== 'PTM0000') {
								Toast.info(result.msgInfo, 3, () => {
									this.getImage();
								});
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
	closeCb = () => {
		const { closeModal } = this.props;
		closeModal && closeModal();
	};
	// 确定去登陆按钮
	goLogin = () => {
		const queryData = qs.parse(location.search, { ignoreQueryPrefix: true });
		if (queryData.entry) {
			buriedPointEvent(activity.jjpWxConfirmBtn, {
				entry: queryData.entry
			});
		}
		const { smsSuccess } = this.props;
		const { otherProps_type } = this.state;
		if (!this.state.smsJrnNo) {
			Toast.info('请先获取短信验证码');
			return;
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.$fetch
					.post(API.smsForLogin, {
						smsJrnNo: this.state.smsJrnNo, // 短信流水号
						osType: getDeviceType(), // 操作系统
						smsCd: values.smsCd,
						usrCnl: getH5Channel(), // 用户渠道
						location: store.getPosition() // 定位地址 TODO 从session取
					})
					.then(
						(res) => {
							if (res.msgCode === 'PTM0000') {
								Cookie.set('fin-v-card-token', res.data.tokenId, { expires: 365 });
								// TODO: 根据设备类型存储token
								store.setToken(res.data.tokenId);
								smsSuccess && smsSuccess();
								this.closeCb();
							} else {
								res.msgInfo && Toast.info(res.msgInfo);
							}
						},
						(err) => {
							Toast.info(err.msgInfo, 3, () => {
								this.getImage();
							});
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

	//获取图片验证码
	getImage = () => {
		this.props.$fetch.get(API.imageCode).then((res) => {
			if (res && res.msgCode === 'PTM0000') {
				this.setState({
					imageCodeUrl: res.image
				});
				store.setNoLoginToken(res.tokenId);
			} else {
				Toast.info(res.msgInfo);
			}
		});
	};
	render() {
		const { getFieldProps } = this.props.form;
		const { smsText, timeflag, imageCodeUrl } = this.state;
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
					<div>
						<InputItem
							maxLength={11}
							type="number"
							{...getFieldProps('phoneValue', {
								rules: [{ required: true, message: '请输入正确手机号' }, { validator: this.validatePhone }]
							})}
							className={style.form_control}
							placeholder="请输入手机号码"
							onBlur={() => {
								handleInputBlur();
							}}
						/>
						<div className={style.imgCodeBox}>
							<InputItem
								id="imgCode"
								// type="number"
								// maxLength="6"
								maxLength="4"
								className={style.loginInput}
								placeholder="请输入图形验证码"
								{...getFieldProps('imgCd', {
									rules: [{ required: true, message: '请输入正确图形验证码' }]
								})}
								onBlur={() => {
									this.setState({
										inputFocus: false
									});
									handleInputBlur();
								}}
							/>
							<div
								className={style.imgCode}
								onClick={() => {
									this.getImage();
								}}
							>
								<img className={style.getCode} src={imageCodeUrl} />
							</div>
						</div>
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
							<Button onClick={this.goLogin} className={style.btn_primary} type="primary">
								确定
							</Button>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}
