import React, { PureComponent } from "react";
import Routers from "../../router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// ==================
// 所需的所有组件
// ==================
import { Layout, message } from "antd";
// import Header from "../../../a_component/Header";
// import Menu from "../../../a_component/Menu";
// import Footer from "../../../a_component/Footer";
// import Bread from "../../../a_component/Bread";
import ErrPage from "../err_page";
import css from "./index.scss";

// ==================
// 本页面所需action
// ==================

import {
  onLogout,
  setUserInfo,
  getNews,
  clearNews,
  getNewsTotal
} from "../../../a_action/app-action";

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
export default class router_Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      route: {},
      showPage: false,
      collapsed: false, // 侧边栏是否收起
      newsData: {
        // 用户消息数据
        notice: [],
        message: [],
        work: []
      },
      newsTotal: 0,
      popLoading: false, // 用户消息是否正在加载
      clearLoading: false // 用户消息是否正在清楚
    };
  }
  UNSAFE_componentWillMount() {
    this.loadComponent(this.props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.loadComponent(nextProps);
  }
  componentWillUnmount() {}
  loadComponent = async props => {
    const { match, history, location } = props;
    console.log(props);
    try {
      let route;
      for (let i = 0; i < Routers.length; i++) {
        if (match.url === Routers[i].path) {
          route = Routers[i];
        }
      }
      if (route) {
        let component = await route.component();
        this.setState({
          showPage: true,
          route: { ...route },
          component: React.createElement(component.default, {
            match,
            history,
            params: location.state
          })
        });
      } else {
        this.setState({
          showPage: true,
          component: React.createElement(ErrPage, {
            match,
            history,
            params: {
              pageType: "404"
            }
          })
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        showPage: true,
        component: React.createElement(ErrPage, {
          match,
          history,
          params: {
            pageType: "404"
          }
        })
      });
    }
  };
  componentDidMount() {
    // 获取当前共有多少条新消息
    this.props.actions.getNewsTotal().then(res => {
      if (res.status === 200) {
        this.setState({
          newsTotal: res.data
        });
      }
    });
  }
  /** 点击切换菜单状态 **/
  onToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  /**
   * 退出登录
   * **/
  onLogout = () => {
    console.log("触发0？");
    this.props.actions.onLogout().then(() => {
      message.success("退出成功");
      this.props.history.push("/user/login");
    });
  };

  /**
   * 获取用户消息数据
   * **/
  getNews = () => {
    this.setState({
      popLoading: true
    });
    this.props.actions
      .getNews()
      .then(res => {
        if (res.status === 200) {
          console.log("AAAA:", res, res.data.notice.length);
          this.setState({
            newsData: res.data,
            newsTotal: res.total
          });
        }
        this.setState({
          popLoading: false
        });
      })
      .catch(() => {
        this.setState({
          popLoading: false
        });
      });
  };

  /**
   * 删除用户消息数据
   * **/
  clearNews = type => {
    this.setState({
      clearLoading: true
    });
    this.props.actions
      .clearNews({ type })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            newsData: res.data,
            newsTotal: res.total
          });
          message.success("删除成功");
        } else {
          message.success("删除失败");
        }
        this.setState({
          clearLoading: false
        });
      })
      .catch(() => {
        this.setState({
          clearLoading: false
        });
      });
  };
  render() {
    const { showPage = false, component } = this.state;
    return showPage ? (
      <Layout className={css.page}>
        {/* <Menu
          data={this.props.menus}
          collapsed={this.state.collapsed}
          location={this.props.location}
        /> */}
        <Layout>
          {/* <Header
            collapsed={this.state.collapsed}
            userinfo={this.props.userinfo}
            onToggle={this.onToggle}
            onLogout={this.onLogout}
            getNews={this.getNews}
            clearNews={this.clearNews}
            newsData={this.state.newsData}
            newsTotal={this.state.newsTotal}
            popLoading={this.state.popLoading}
            clearLoading={this.state.clearLoading}
          /> */}
          {/* <Bread menus={this.props.menus} location={this.props.location} /> */}
          <Content className={css.content}>{component}</Content>
          {/* <Footer /> */}
        </Layout>
      </Layout>
    ) : null;
  }
}
