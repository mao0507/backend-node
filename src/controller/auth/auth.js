/* 引用 token 功能 function */
const { jwtToken, verifyToken } = require('../auth/toekn/token')
const { AuthModel } = require('../../model/commonModel')

/**
 * 宣告 登入相關 function
 * @function login 登入
 * @function logout 登出
 * @function checkToken 檢查 token
 * @returns login, logout, checkToken
 */

/**
 * 登入
 * @param { Object } loginInfo
 * @returns { String }
 */

const login = (loginInfo) => {
  if (!loginInfo) return AuthModel(true, 200, '缺少對應資料')
  else console.log('login work')
  const { account, password } = loginInfo
  console.log(account, password)
  const token = jwtToken('9527', 'mao')
  const response = {
    token,
    userName: 'mao',
    userId: '9527',
  }

  return AuthModel(true, 200, 'login Work', response)
}

/**
 * 檢查 Token 是否失效
 */
const checkToken = (token) => {
  verifyToken(token)
}

module.exports = {
  login,
  checkToken,
}
