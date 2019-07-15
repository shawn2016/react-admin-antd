/** Role 系统管理/角色管理 **/

// ==================
// 所需的各种插件
// ==================

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import P from "prop-types";
import QRCode from "qrcode.react";
import {
  Form,
  Button,
  Icon,
  Input,
  Table,
  message,
  Popconfirm,
  Modal,
  Radio,
  Tooltip,
  Divider,
  Select,
  InputNumber,
  Drawer,
  Popover
} from "antd";
import css from "./index.scss";
import c from "classnames";
import tools from "../../../util/tools"; // 工具

// ==================
// 所需的所有组件
// ==================

import TreeTable from "../../../a_component/TreeChose/PowerTreeTable";

// ==================
// 本页面所需action
// ==================

import { getProjects, delProjects } from "../../../a_action/act-action";
// ==================
// Definition
// ==================
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { Option } = Select;
@connect(
  state => ({
    powerTreeData: state.sys.powerTreeData,
    powers: state.app.powers
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        getProjects,
        delProjects
      },
      dispatch
    )
  })
)
@Form.create()
export default class RoleAdminContainer extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any,
    actions: P.any,
    powers: P.array,
    form: P.any,
    powerTreeData: P.array
  };

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      loading: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,

      selectedComponentIndex: -1,

      localComponents: [],
      selectedLocalComponentIndex: -1,
      projects: [],
      pageNum: 0,
      pageSize: 10,
      visible: false
    };
    this.getProjects();
    // this.getLocalComponents();
  }
  getLocalComponents = async () => {
    try {
      const res = await fetch("/api/sync/components");
      const json = await res.json();
      if (json.retcode === 0) {
        this.setState({
          localComponents: json.components
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  getProjects = async () => {
    this.props.actions
      .getProjects()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            projects: res.data
          });
        }
      })
      .catch(() => {});
  };
  // 编辑
  editactive = id => {
    this.props.history.push(`/activity/editactive/${id}`);
  };
  onModalShow = type => {};
  onDel = id => {
    this.props.actions
      .delProjects({ id })
      .then(res => {
        if (res.status === 200) {
          message.success("删除成功");
        }
      })
      .catch(() => {
        message.error("删除失败");
      });
  };
  // 构建字段
  makeColumns = () => {
    const columns = [
      {
        title: "序号",
        dataIndex: "serial",
        key: "serial"
      },
      {
        title: "名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "描述",
        dataIndex: "desc",
        key: "desc"
      },
      {
        title: "状态",
        dataIndex: "conditions",
        key: "conditions",
        render: (text, record) =>
          text === 1 ? (
            <span style={{ color: "green" }}>启用</span>
          ) : (
            <span style={{ color: "red" }}>禁用</span>
          )
      },
      {
        title: "操作",
        key: "control",
        width: 200,
        render: (text, record) => {
          console.log(record);
          const controls = [];
          const p = this.props.powers;
          p.includes("role:query") &&
            controls.push(
              <span key="0" className="control-btn blue">
                <Popover
                  placement="top"
                  content={
                    <QRCode
                      value={`http://localhost:8888/#/iframe/previewactive/${1}`}
                    />
                  }
                  trigger="click"
                >
                  <Tooltip placement="top" title="预览">
                    <Icon type="qrcode" />
                  </Tooltip>
                </Popover>
              </span>
            );
          p.includes("role:query") &&
            controls.push(
              <span
                key="1"
                className="control-btn green"
                onClick={() => this.onModalShow(record, "see")}
              >
                <Tooltip placement="top" title="查看">
                  <Icon type="eye" />
                </Tooltip>
              </span>
            );
          p.includes("role:up") &&
            controls.push(
              <span
                key="2"
                className="control-btn blue"
                onClick={() => this.editactive(1)}
              >
                <Tooltip placement="top" title="编辑">
                  <Icon type="edit" />
                </Tooltip>
              </span>
            );
          p.includes("role:power") &&
            controls.push(
              <Popconfirm
                key="3"
                title="确定发布吗?"
                onConfirm={() => this.onDel(record.id)}
                okText="确定"
                cancelText="取消"
              >
                <span className="control-btn blue">
                  <Tooltip placement="top" title="发布">
                    <Icon type="cloud-upload" />
                  </Tooltip>
                </span>
              </Popconfirm>
            );
          p.includes("role:del") &&
            controls.push(
              <Popconfirm
                key="4"
                title="确定删除吗?"
                onConfirm={() => this.onDel(record._id)}
                okText="确定"
                cancelText="取消"
              >
                <span className="control-btn red">
                  <Tooltip placement="top" title="删除">
                    <Icon type="delete" />
                  </Tooltip>
                </span>
              </Popconfirm>
            );

          const result = [];
          controls.forEach((item, index) => {
            if (index) {
              result.push(<Divider key={`line${index}`} type="vertical" />);
            }
            result.push(item);
          });
          return result;
        }
      }
    ];
    return columns;
  };

  // 构建字段
  makeLocalColumns = () => {
    const columns = [
      {
        title: "名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "描述",
        dataIndex: "desc",
        key: "desc"
      }
    ];
    return columns;
  };

  // 构建table所需数据
  makeData = data => {
    return data.map((item, index) => {
      return {
        key: index,
        _id: item._id,
        serial: index + 1 + this.state.pageNum * this.state.pageSize,
        name: item.name,
        desc: item.desc,
        sorts: item.sorts,
        conditions: item.conditions,
        control: item.id,
        powers: item.powers
      };
    });
  };

  // 构建table所需数据
  makeLocalData = data => {
    return data.map((item, index) => {
      return {
        key: index,
        id: item._id,
        serial: index + 1 + this.state.pageNum * this.state.pageSize,
        name: item.name,
        desc: item.desc,
        control: item.id
      };
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const me = this;
    const { form } = me.props;
    const p = this.props.powers;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    };

    return (
      <div>
        <div className="g-search">
          <ul className="search-func">
            <li>
              <Button
                type="primary"
                disabled={!p.includes("role:add")}
                onClick={() => this.showDrawer(null, "add")}
              >
                <Icon type="plus-circle-o" />
                新增项目
              </Button>
            </li>
          </ul>
        </div>
        <div className="diy-table">
          <Table
            columns={this.makeColumns()}
            loading={this.state.loading}
            dataSource={this.makeData(this.state.projects)}
          />
        </div>
        <Drawer
          title="本地组件列表"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div className="diy-table">
            <Table
              columns={this.makeLocalColumns()}
              loading={this.state.loading}
              dataSource={this.makeLocalData(this.state.localComponents)}
            />
          </div>
        </Drawer>
      </div>
    );
  }
}
