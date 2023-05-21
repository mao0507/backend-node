/**
 * 宣告回傳 模型，帶入指定欄位資料即可輸出物件回去
 * @param { Boolean } success  判斷是否請求成功
 * @param { Number } status 回傳 http 狀態碼
 * @param { String } msg 回傳訊息
 * @param { any } data 回傳請求資料
 * @returns { String } 將物件轉換為 JSON，並回傳
 */
const AuthModel = (success, status, msg, data) => {
  const obj = {
    success,
    status,
    response: {
      msg,
      data,
    },
  }
  return JSON.stringify(obj)
}

module.exports = {
  AuthModel,
}
