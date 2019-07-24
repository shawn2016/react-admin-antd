import React, { PureComponent } from 'react'
import styles from './index.scss'

export default class RuleModal extends PureComponent {

  render() {
    const { actTime, actObject, actRules, visible, handleClose } = this.props
    return (
      <div>
        {
          visible && <div className={styles.rule_modal}>
            <div className={styles.mask}></div>
            <div className={styles.modalWrapper}>
              <h2>活动规则</h2>
              <div className={styles.modal_body}>
                <div className={styles.item}>
                  <h3>活动时间：</h3>
                  <em className={styles.desc}>{actTime}</em>
                </div>
                <div className={styles.item}>
                  <h3>活动对象：</h3>
                  <em className={styles.desc}>{actObject}</em>
                </div>
                <div className={styles.item}>
                  <h3>活动规则：</h3>
                  <ol>
                    {
                      actRules.map((item, idx) => <li key={idx} className={styles.desc}>{item}</li>)
                    }
                  </ol>
                </div>
                <p className={styles.bottom_desc}>如有疑问，请联系随行付还到客服<br />400-088-7626</p>
              </div>
              <div className={styles.closeBtn} onClick={handleClose}></div>
            </div>
          </div>
        }
      </div>
    )
  }
}
