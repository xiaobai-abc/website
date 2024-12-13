export const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const config = {
  // 默认地址
  baseURL: API_URL,
  // 设置超时时间
  timeout: 6 * 1000, //六秒 超时
  // 跨域时候允许携带凭证
  withCredentials: false
};

// 数据返回的接口
export const RequestEnums = {
  OVERDUE: 401, // 登录失效
  FAIL: 999, // 请求失败
  SUCCESS: 200, // 请求成功
  ERROR: 500 // 服务器故障
};

// 响应体 code 枚举
export const ResponseEnums = {
  SUCCESS: 1, // 请求成功
  FAIL: 0, // 请求失败
  OVERDUE: 401 // 登录失效
};
