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
import { createForm } from "rc-form";
import { Select, Drawer, Button, Tabs, Divider, Form, Input } from "antd";
const { TabPane } = Tabs;
const { Option } = Select;
const postPageMessage = page => {
  document.getElementById("pagePreviewIframe").contentWindow.postMessage(
    {
      type: "page",
      page: page
    },
    "*"
  );
};
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
  name: "",
  config: {
    props: null
  }
};
// ==================
// 所需的所有组件
// ==================

import css from "./index.scss";
import ImgLogo from "../../../assets/react-logo.jpg";

// ==================
// 本页面所需action
// ==================

import { getPages, getComponents } from "../../../a_action/act-action";
import withViewport from "../../../decorators/withViewport";
@createForm()
@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({ getPages, getComponents }, dispatch)
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
      deviceWidth: 320,
      deviceHeight: 568,
      page: {
        components: [],
        template: null
      },
      components: [],
      component: emptyComponent,
      componentIndex: -1,

      pageGenerating: false,
      pagePublishing: false,

      showComponents: false,
      showComponentSettings: false,

      deviceWidth: 320,
      deviceHeight: 568,

      editorSliderValue: 0.5,

      editorProperties: null,
      editorValues: null,

      publishUrl: "",
      config: null
    };
    // props.params.id
    this.getPage(1);
    this.getComponents();
  }
  componentDidMount = () => {
    window.addEventListener(
      "message",
      event => {
        // if(event.origin !== 'http://localhost:3000') return;
        if (event.data.type === "componentIndex") {
          this.showEditComponentDialog(event.data.componentIndex);
        }
      },
      false
    );
  };
  getComponents = async () => {
    this.props.actions
      .getComponents()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            components: json.data.components,
            component: json.data.components[0]
          });
        }
      })
      .catch(() => {});
  };
  getPage = id => {
    this.props.actions
      .getPages({ id })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            page: res.data.page
          });
        }
      })
      .catch(() => {});
  };

  showEditComponentDialog = (componentIndex) => {
    const component = this.state.page.components[componentIndex];
    this.setState({
      componentIndex: componentIndex,
      component: component,
      showComponentSettings: true,
      showComponents: false,

      editorProperties: component.config.properties,
      editorValues: component.config.props
    });
    this.setState({
      config: component.config.properties
    });
  };
  handleChangeDevice = value => {
    this.setState({
      deviceWidth: value.split("*")[0],
      deviceHeight: value.split("*")[1]
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
    console.log(component)
    postComponentMessage(this.state.componentIndex, component);
  };
  render() {
    const {
      deviceHeight,
      deviceWidth,
      page,
      showComponentSettings,
      editorSliderValue,
      config
    } = this.state;
    console.log(config);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={classNames(css.home)}>
        <div className={classNames(css.leftActivity)}>
          <Select
            defaultValue="320*568"
            style={{ width: 120 }}
            onChange={this.handleChangeDevice}
          >
            <Option value="320*480">iPhone4</Option>
            <Option value="320*568">iPhone5</Option>
            <Option value="375*627">iPhone6</Option>
            <Option value="414*736">iPhone6S</Option>
          </Select>
          <div>
            {deviceWidth}*{deviceHeight}
          </div>
          <Resizable
            onResize={this.handleResize}
            height={deviceHeight}
            width={deviceWidth}
          >
            <div
              style={{
                height: deviceHeight,
                width: deviceWidth
              }}
            >
              <iframe
                id="pagePreviewIframe"
                className={css.previewIframe}
                style={{
                  width: deviceWidth - 20,
                  height: deviceHeight - 20
                }}
                src={`/#/iframe/previewactive/${page._id}`}
                frameBorder="0"
              />
            </div>
          </Resizable>
        </div>
        <div className={classNames(css.rightActivity)}>
          <Tabs onChange={this.callback} type="card">
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

                  {/* <Form.Item
                    wrapperCol={{
                      xs: { span: 24, offset: 0 },
                      sm: { span: 16, offset: 8 }
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
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
    );
  }
}
