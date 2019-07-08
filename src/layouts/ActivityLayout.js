/** 基础页面结构 - 有头部，有底部，有侧边导航 **/

// ==================
// 必需的各种插件
// ==================
import React from "react";
import { connect } from "react-redux";
import c from "classnames";
import Loadable from "react-loadable";
import { bindActionCreators } from "redux";
// import P from "prop-types";
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
const NoPower = Loadable({
  loader: () => import("../a_container/ErrorPages/401"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});
const Home = Loadable({
  loader: () => import("../a_container/home"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});

const EditActive = Loadable({
  loader: () => import("../a_container/Activity/EditActive"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});

// ==================
// 所需的所有组件
// ==================
import { Layout, message } from "antd";
import AcHeader from "../a_component/AcHeader";
import ActMenu from "../a_component/ActMenu";
import Footer from "../a_component/Footer";
import Bread from "../a_component/Bread";
import css from "./ActivityLayout.scss";

// ==================
// 本页面所需action
// ==================

import {
  onLogout,
  setUserInfo,
  getNews,
  clearNews,
  getNewsTotal
} from "../a_action/app-action";

// ==================
// Class
// ==================
const { Content } = Layout;
@connect(
  state => ({
    userinfo: state.app.userinfo,
    powers: state.app.powers,
    menus: state.app.menus
  }),
  dispatch => ({
    actions: bindActionCreators(
      { onLogout, setUserInfo, getNews, clearNews, getNewsTotal },
      dispatch
    )
  })
)
export default class AppContainer extends React.Component {
  //   static propTypes = {
  //     location: P.any,
  //     history: P.any,
  //     actions: P.any,
  //     powers: P.array,
  //     userinfo: P.any,
  //     menus: P.array
  //   };

  constructor(props) {
    super(props);
  }

  /**
   * 工具 - 判断当前用户是否有该路由权限，如果没有就跳转至401页
   * @pathname: 路由路径
   * **/
  checkRouterPower(pathname) {
    const m = this.props.menus.map(item => item.url.replace(/^\//, "")); // 当前用户拥有的所有菜单
    const urls = pathname.split("/").filter(item => !!item);
    for (let i = 0; i < urls.length; i++) {
      if (!m.includes(urls[i])) {
        return false;
      }
    }
    return true;
  }

  /** 切换路由时触发 **/
  onEnter(Component, props) {
    /**
     * 检查当前用户是否有该路由页面的权限
     * 没有则跳转至401页
     * **/
    if (this.checkRouterPower(props.location.pathname)) {
      return <Component {...props} />;
    }
    return <Redirect to="/nopower" />;
  }

  render() {
    const u = this.props.userinfo;

    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" render={props => this.onEnter(Home, props)} />
        <Route
          exact
          path="/activity/editactive"
          render={props => this.onEnter(EditActive, props)}
        />
        <Route exact path="/nopower" component={NoPower} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
