const success = obj => {
  return {
    data: obj,
    status: 200,
    message: "请求成功"
  };
};
const fail = obj => {
  return {
    data: obj,
    status: 200,
    message: "请求失败"
  };
};
export default { success, fail };
