import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Loadable from "react-loadable";
import { createHashHistory } from "history"; // 锚点模式的history
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUserInfo } from "../a_action/app-action";
import tools from "../util/tools";
const history = createHashHistory();

/** 普通组件 **/
import { message } from "antd";
message.config({
  // 全局提示只显示一秒
  duration: 1
});

const Loading = ({ error, pastDelay }) => {
  if (pastDelay) {
    return <div>111111111</div>;
  } else if (error) {
    console.log(error);
    return <div>2222222</div>;
  }
  return null;
};
function LoadingComponent() {
  return <div>33333333</div>;
}
const RouterPage = Loadable({
  loader: () => import("../a_container/common/routerPage"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});
const LoginPage = Loadable({
  loader: () => import("../a_container/login/login_page"),
  loading: Loading,
  LoadingComponent,
  delay: 300
});
@connect(
  state => ({
    userinfo: state.app.userinfo
  }),
  dispatch => ({
    actions: bindActionCreators({ setUserInfo }, dispatch)
  })
)
export default class Routers extends Component {
  UNSAFE_componentWillMount() {
    const userinfo = sessionStorage.getItem("userinfo");
    /**
     * sessionStorage中有user信息，但store中没有
     * 说明刷新了页面，需要重新同步user数据到store
     * **/
    if (userinfo && !this.props.userinfo) {
      this.props.actions.setUserInfo(JSON.parse(tools.uncompile(userinfo)));
    }
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/:modules/:page" component={RouterPage} />
        </Switch>
      </Router>
    );
  }
}
