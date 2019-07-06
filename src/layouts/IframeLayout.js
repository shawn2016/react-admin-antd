/** 基础页面结构 - 有头部，有底部，有侧边导航 **/

// ==================
// 所需的各种插件
// ==================

import React from "react";
import { connect } from "react-redux";
import c from "classnames";
import Loadable from "react-loadable";
import { bindActionCreators } from "redux";
import P from "prop-types";

import { Link, Route, Switch, Redirect } from "react-router-dom";

// ==================
// 路由子页面
// ==================
const Loading = ({ error }) => {
  if (error) {
    return <div>错误</div>;
  }
  return null;
};
function LoadingComponent() {
  return <div>loading页面</div>;
}
const NotFound = Loadable({
  loader: () => import("../a_container/ErrorPages/404"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});
const PreviewActive = Loadable({
  loader: () => import("../a_container/Iframe/PreviewActive"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});
// ==================
// 所需的所有组件
// ==================
import { Layout } from "antd";

import Footer from "../a_component/Footer";
import css from "./IframeLayout.scss";

// ==================
// 本页面所需action
// ==================

// ==================
// Class
// ==================
const { Content } = Layout;
@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({}, dispatch)
  })
)
export default class AppContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false // 侧边栏是否收起
    };
  }

  // 点击切换
  onToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          component={PreviewActive}
          path="/iframe/previewactive/:id"
        />
        <Route render={NotFound} />
      </Switch>
    );
  }
}

// ==================
// PropTypes
// ==================

AppContainer.propTypes = {
  location: P.any,
  history: P.any,
  actions: P.any
};
