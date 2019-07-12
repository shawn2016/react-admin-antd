/* Footer 页面底部 */
import React from 'react';
import { Layout } from 'antd';
import P from 'prop-types';
import css from './index.scss';

const { Footer } = Layout;
export default class Com extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Footer className={css.footer}>
                © 2019 随行付金科, Inc.
            </Footer>
        );
    }
}

Com.propTypes = {
};
