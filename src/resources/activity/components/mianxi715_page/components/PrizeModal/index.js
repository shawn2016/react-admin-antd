import React, { Component } from 'react';
import { Modal } from 'antd-mobile';
import style from './index.scss';
import use_btn from '../../img/use_btn.png';
import coupon_img from '../../img/coupon_bg.png';
import coupon_img2 from '../../img/coupon2_bg.png';

export default class WinPrize extends Component {
	static defaultProps = {};
	constructor(props) {
		super(props);
		this.state = {
			isPrizeModal: true
		};
	}

	closeModal = () => {
		const { setalertType, closeCb } = this.props;
		closeCb && closeCb();
		setalertType && setalertType();
	};

	// 点击按钮
	go = () => {
		const { clickCb } = this.props;
		clickCb && clickCb();
	};
	render() {
		const { type, clickCb } = this.props;
		const { isPrizeModal } = this.state;
		return (
			<Modal className="win_prize_modal" visible={isPrizeModal} transparent>
				<div className={style.win_prize_cont}>
					<img
						src={type === 'first' ? coupon_img : coupon_img2}
						className={style.win_prize_bg}
						alt="huodong"
					/>
					<img
						src={use_btn}
						onClick={() => {
							clickCb();
						}}
						className={style.win_prize_btn}
						alt="button"
					/>
				</div>
				<i className={style.closeBtn} onClick={this.closeModal} />
			</Modal>
		);
	}
}
