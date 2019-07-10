import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = ({ error, pastDelay }) => {
  if (pastDelay) {
    return <div>111111111</div>;
  } else if (error) {
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
export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/:modules/:page" component={RouterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
