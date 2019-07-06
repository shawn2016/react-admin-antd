/**
  一些公共的action可以写在这里，比如用户登录、退出登录、权限查询等
  其他的action可以按模块不同，创建不同的js文件
**/

import Fetchapi from '../util/fetch-api';   // 自己写的工具函数，封装了请求数据的通用接口
import { message } from 'antd';

/**
 * 获取页面信息
 * **/
export const getPages = (params = {}) => async dispatch => {
    try {
      const res = await Fetchapi.newFetch("api/getpages", params);
      return res.data;
    } catch (err) {
      message.error("网络错误，请重试");
    }
  };
  
  /**
   * 获取页面组件信息
   * **/
  export const getComponents = (params = {}) => async dispatch => {
    try {
      const res = await Fetchapi.newFetch("api/getcomponents", params);
      return res.data;
    } catch (err) {
      message.error("网络错误，请重试");
    }
  };