const success = (obj, options) => {
  return {
    data: obj,
    status: 200,
    message: (options && options.message) || "请求成功"
  };
};
const fail = (obj, options) => {
  return {
    data: obj,
    status: 200,
    message: (options && options.message) || "请求失败"
  };
};
export default { success, fail };
