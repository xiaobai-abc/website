export const handleStatus = (function () {
  function func(response) {
    if (response && response.code == 200) {
      return response.data;
    }
    return Promise.reject(response?.message || handleStatus.msg || "fail");
  }

  func.msg = "响应失败~~~";

  return func;
})();
