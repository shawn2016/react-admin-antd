/* 主页 */

// ==================
// 所需的各种插件
// ==================

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { bindActionCreators } from "redux";
import P from "prop-types";
import qs from "qs";

const emptyComponent = {
  config: {
    props: null
  }
};
// ==================
// 所需的所有组件
// ==================

// ==================
// 本页面所需action
// ==================

import { getPages, getComponent } from "../../../a_action/act-action";

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({ getPages, getComponent }, dispatch)
  })
)
export default class PreviewActiveContainer extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any,
    actions: P.any
  };
  constructor(props) {
    super(props);
    this.state = {
      component: emptyComponent
    };
    const query = qs.parse(location.href.split("?")[1], {
      ignoreQueryPrefix: true
    });
    console.log(query,'-----------');
    this.getComponent(query.projectName, query.componentName);
  }

  componentDidMount = () => {
    window.addEventListener(
      "message",
      event => {
        // if(event.origin !== 'http://localhost:3000') return;
        console.log("previewPage receives message", event);
        if (event.data.type === "component") {
          this.setState({
            component: event.data.component
          });
        }
      },
      false
    );
  };

  getComponent = (project, component) => {
    this.props.actions
      .getComponent({
        project,
        component
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            component: res.data
          });
        }
      })
      .catch(() => {});
  };

  render() {
    const component = this.state.component;
    const Com = eval(component.fileContent);
    return (
      <div className="component">
        {Com ? <Com {...component.config.props} /> : null}
      </div>
    );
  }
}
