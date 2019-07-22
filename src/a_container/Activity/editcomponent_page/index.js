/* 主页 */

// ==================
// 所需的各种插件
// ==================

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Resizable, ResizableBox } from "react-resizable";
import { bindActionCreators } from "redux";
import P from "prop-types";
import { Link } from "react-router-dom";
import { createForm } from "rc-form";
import qs from "qs";

import {
  Select,
  Drawer,
  Button,
  Divider,
  Form,
  Input,
  Row,
  Col,
  Layout,
  Icon,
  Tooltip,
  Avatar,
  Menu,
  Dropdown,
  Popconfirm,
  Badge,
  Popover,
  Tabs,
  List,
  Tag,
  Spin,
  Table,
  message
} from "antd";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const { SubMenu, Item } = Menu;
const postComponentMessage = (componentIndex, component) => {
  document.getElementById("pagePreviewIframe").contentWindow.postMessage(
    {
      type: "component",
      componentIndex: componentIndex,
      component: component
    },
    "*"
  );
};

const emptyComponent = {
  config: {
    props: null
  }
};
const query = qs.parse(location.href.split("?")[1], {
  ignoreQueryPrefix: true
});
// ==================
// 所需的所有组件
// ==================

import css from "./index.scss";

// ==================
// 本页面所需action
// ==================

import { getPages, getComponent, putPages } from "../../../a_action/act-action";
import withViewport from "../../../decorators/withViewport";
@createForm()
@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({ getPages, getComponent, putPages }, dispatch)
  })
)
@withViewport
export default class PageAdminContainer extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any,
    actions: P.any
  };
  constructor(props) {
    super(props);
    this.state = {
      component: emptyComponent,
      deviceWidth: 320,
      deviceHeight: 568,
      showIframe: false
    };

    this.getComponent(query.projectName, query.componentName);
  }

  UNSAFE_componentWillReceiveProps(nextP) {
    // if (this.props.data !== nextP.data) {
    //   this.makeSourceData(nextP.data);
    // }
    // if (this.props.location !== nextP.location) {
    //   this.nowChosed(nextP.location);
    // }
  }
  refreshComponent = () => {
    this.getComponent(query.projectName, query.componentName);
  };

  addComponentToPage = component => {
    let page = this.state.page;
    const componentIndex = page.components.length;
    const cloneComponent = _.cloneDeep(component);
    page.components.push(cloneComponent);
    this.setState({
      page: page
    });
    postComponentMessage(componentIndex, cloneComponent);
    this.showEditComponentDialog(componentIndex);
    this.setState({
      visible: false
    });
    message.success("添加成功");
  };

  getComponent = (project, component) => {
    this.setState({
      showIframe: false
    });
    this.props.actions
      .getComponent({
        project,
        component
      })
      .then(res => {
        if (res.msgCode === "PTM0000") {
          this.setState({
            component: res.data,
            showIframe: true
          });
        }
      })
      .catch(() => {});
  };

  showEditComponentDialog = componentIndex => {
    const component = this.state.page.components[componentIndex];
    this.setState({
      componentIndex: componentIndex,
      component: component,
      showComponents: false
    });
    console.log(component);
    this.setState({
      config: component.config.properties
    });
  };
  handleChangeDevice = value => {
    this.setState({
      deviceWidth: Number(value.split("*")[0]),
      deviceHeight: Number(value.split("*")[1])
    });
  };
  handleResize = (event, { element, size }) => {
    this.setState({
      deviceWidth: size.width,
      deviceHeight: size.height
    });
  };
  callback = key => {
    console.log(key);
  };

  inputChange = (event, item, key) => {
    console.log(event.target.value, item, key);
    const component = this.state.page.components[this.state.componentIndex];
    component.config.properties[key].default = event.target.value;
    component.config.props[key] = event.target.value;
    console.log(component);
    postComponentMessage(this.state.componentIndex, component);
  };

  render() {
    const { deviceHeight, deviceWidth, config } = this.state;
    return (
      <Layout className={css.page}>
        <Layout>
          <Content className={css.content}>
            <div className={classNames(css.home)}>
              <div className={classNames(css.leftActivity)}>
                <Resizable
                  onResize={this.handleResize}
                  height={deviceHeight}
                  width={deviceWidth}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      height: deviceHeight,
                      width: deviceWidth
                    }}
                  >
                    <Spin tip="页面加载中..." spinning={!this.state.showIframe}>
                      <div style={{ position: "relative", top: "25px" }}>
                        {deviceWidth}*{deviceHeight}
                      </div>
                      {this.state.showIframe && (
                        <iframe
                          id="componentPreviewIframe"
                          className={css.previewIframe}
                          style={{
                            width: deviceWidth - 20,
                            height: deviceHeight - 20
                          }}
                          src={`/#/activity/previewcomponent_page?projectName=${
                            query.projectName
                          }&componentName=${query.componentName}`}
                          frameBorder="0"
                        />
                      )}
                    </Spin>
                  </div>
                </Resizable>
              </div>
              <div className={classNames(css.rightActivity)}>
                <Header className={classNames(css.header)}>
                  <Col span={8}>
                    <Select
                      defaultValue="320*568"
                      style={{ width: 120 }}
                      onChange={this.handleChangeDevice}
                    >
                      <Option value="320*480">iPhone4</Option>
                      <Option value="320*568">iPhone5</Option>
                      <Option value="375*627">iPhone6</Option>
                      <Option value="414*736">iPhone6S</Option>
                      <Option value="375*812">iPhoneX</Option>
                    </Select>
                  </Col>
                  <div
                    className={classNames(
                      css.rightBox,
                      "flex-auto flex-row flex-je flex-ac"
                    )}
                  >
                    <Tooltip
                      placement="bottom"
                      title={this.state.fullScreen ? "退出全屏" : "全屏"}
                    >
                      <div className={css.full}>
                        <Icon
                          className={classNames(css.icon, "flex-none")}
                          type={this.state.fullScreen ? "shrink" : "arrows-alt"}
                          onClick={
                            this.state.fullScreen
                              ? this.exitFullScreen
                              : this.requestFullScreen
                          }
                        />
                      </div>
                    </Tooltip>
                    <Button
                      onClick={this.refreshComponent}
                      className={classNames(css.editButton, "flex-none")}
                      type="primary"
                    >
                      刷新页面
                    </Button>
                  </div>
                </Header>
                <Tabs tabBarGutter={3} onChange={this.callback}>
                  <TabPane tab="基础设置" key="1">
                    <div className={classNames(css.TabPaneItem)}>
                      <Divider orientation="left">基本选项</Divider>
                      <Form>
                        {config &&
                          Object.keys(config).map((key, index) => {
                            return (
                              <Form.Item key={index} label={config[key].title}>
                                <Input
                                  onChange={e => {
                                    this.inputChange(e, config[key], key);
                                  }}
                                  defaultValue={config[key].default}
                                />
                              </Form.Item>
                            );
                          })}
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane tab="派奖方式" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="奖项设置" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                  <TabPane tab="高级设置" key="4">
                    Content of Tab Pane 4
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Content>
          {/* <Footer /> */}
        </Layout>
      </Layout>
    );
  }
}
