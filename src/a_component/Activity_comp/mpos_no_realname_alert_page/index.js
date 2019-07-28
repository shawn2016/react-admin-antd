import React, { PureComponent } from 'react';
import styles from './index.scss';
import icon from './img/Warn.png';
import { setBackGround } from '../../../util/background';

@setBackGround('#fff')
export default class mpos_no_realname_alert_page extends PureComponent {
	render() {
		return (
			<div className={styles.whiteList}>
				<div className={styles.content}>
					<div className={styles.icon}>
						<img src={icon} />
						<div className={styles.desc}>请先去完成实名认证哦~</div>
					</div>
				</div>
			</div>
		);
	}
}
