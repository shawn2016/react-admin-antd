/** 头部 **/
import React from "react";
import P from "prop-types";
import { Link } from "react-router-dom";
import {
  Layout,
  Icon,
  Tooltip,
  Avatar,
  Menu,
  Dropdown,
  Badge,
  Popover,
  Tabs,
  List,
  Tag,
  Spin,
  Button
} from "antd";
import c from "classnames";
import css from "./index.scss";
import Nothing from "../Nothing";
const { Header } = Layout;
const { TabPane } = Tabs;
export default class Com extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false // 当前是否是全屏状态
    };
  }

  /** 点击左侧按钮时触发 **/
  toggle = () => {
    this.props.onToggle();
  };

  /**
   * 进入全屏
   * **/
  requestFullScreen = () => {
    const element = document.documentElement;
    // 判断各种浏览器，找到正确的方法
    const requestMethod =
      element.requestFullScreen || //W3C
      element.webkitRequestFullScreen || //Chrome等
      element.mozRequestFullScreen || //FireFox
      element.msRequestFullScreen; //IE11
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
      //for Internet Explorer
      const wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    this.setState({
      fullScreen: true
    });
  };

  /**
   * 退出全屏
   */
  exitFullScreen = () => {
    // 判断各种浏览器，找到正确的方法
    const exitMethod =
      document.exitFullscreen || //W3C
      document.mozCancelFullScreen || //Chrome等
      document.webkitExitFullscreen;
    if (exitMethod) {
      exitMethod.call(document);
    } else if (typeof window.ActiveXObject !== "undefined") {
      //for Internet Explorer
      const wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    this.setState({
      fullScreen: false
    });
  };

  /**
   * 退出登录
   * **/
  onMenuClick = e => {
    console.log("header触发", e);
    if (e.key === "logout") {
      // 退出按钮被点击
      this.props.onLogout();
    }
  };

  updatePage = () => {
    const page = this.state.page;
    this._updatePage(page, (err, data) => {
      if (err) {
        this.showSnackbar("修改失败");
      }
      if (data.retcode === 0) {
        this.showSnackbar("修改成功");
      } else {
        this.showSnackbar("修改失败");
      }
    });
  };

  /**
   * 消息窗口显示与隐藏时触发
   * **/
  onPopVisible = e => {
    if (e) {
      this.props.getNews();
    }
  };

  /**
   * 清空指定类型的消息
   * **/
  clearNews(type) {
    this.props.clearNews(type);
  }
  render() {
    const u = this.props.userinfo;
    const { notice, message, work } = this.props.newsData;
    console.log("notice:", this.props.newsData);
    return (
      <Header className={(css.header)}>
        <Tooltip
          placement="bottom"
          title={this.props.collapsed ? "展开菜单" : "收起菜单"}
        >
          <Icon
            className={c(
              css.trigger,
              { [css.fold]: !this.props.collapsed },
              "flex-none"
            )}
            type={"menu-unfold"}
            onClick={this.toggle}
          />
        </Tooltip>
        <div className={c(css.rightBox, "flex-auto flex-row flex-je flex-ac")}>
          <Tooltip
            placement="bottom"
            title={this.state.fullScreen ? "退出全屏" : "全屏"}
          >
            <div className={css.full}>
              <Icon
                className={c(css.icon, "flex-none")}
                type={this.state.fullScreen ? "shrink" : "arrows-alt"}
                onClick={
                  this.state.fullScreen
                    ? this.exitFullScreen
                    : this.requestFullScreen
                }
              />
            </div>
          </Tooltip>
          <Tooltip placement="bottom" title="预览并保存">
            <Button className={c(css.editButton, "flex-none")} type="primary">
              预览
            </Button>
          </Tooltip>
          <Button className={c(css.editButton, "flex-none")} type="primary">
            保存
          </Button>
          <Tooltip placement="bottom" title="退出编辑">
            <Button
              className={c(css.editButton, "flex-none")}
              type="primary"
              icon="logout"
            />
          </Tooltip>
        </div>
      </Header>
    );
  }
}

Com.propTypes = {
  onToggle: P.func, // 菜单收起与展开状态切换
  collapsed: P.bool, // 菜单的状态
  onLogout: P.func, // 退出登录
  userinfo: P.object, // 用户信息
  getNews: P.func, // 获取用户消息
  newsData: P.object, // 用户消息数据
  popLoading: P.bool, // 消息弹窗是否正在加载数据
  clearNews: P.func, // 清楚指定类型的消息
  clearLoading: P.bool, // 是否正在清楚消息
  newsTotal: P.number // 消息总数
};
