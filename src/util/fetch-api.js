import { baseUrl } from "../config";
import reqwest from "reqwest"; // 封装了ajax请求的库
import axios from "axios"; // 封装了fetch请求的库

export default class ApiService {
  // fetch请求
  static newFetch(url, bodyObj = {}, options) {
      console.log('22222222222222222')
    console.log(baseUrl, url, bodyObj, options);
    return axios({
      url: `${url}`,
      method: (options && options.method) || "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      withCredentials: true,
      data: JSON.stringify(bodyObj)
    });
  }
}
