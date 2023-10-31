const jwt = require('jsonwebtoken')
const config = require('dotenv')

/**
 * 建立 Token
 * @param {String} userId
 * @param {String} userName
 * @returns
 */

const jwtToken = (userId, userName) => {
  const exp = Math.floor(Date.now() / 1000) + 60 * 15
  if (userId && userName) {
    const payload = { userId, userName }
    const token = jwt.sign(
      { payload, exp },
      process.env.JWT_SIGN_SECRET ? process.env.JWT_SIGN_SECRET : 'maoDidThis'
    )
    return token
  } else {
    return ''
  }
}

/**
 * 檢查 token 是否失效
 * @param {String} token
 * @returns
 */

const verifyToken = (token) => {
  if (token === '') return false
  //檢查是否有env 設定 JWT_SIGN_SECRET 沒有的話 帶入預設
  const secret = process.env.JWT_SIGN_SECRET
    ? process.env.JWT_SIGN_SECRET
    : 'maoDidThis'

  var status = false
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      if (error.name === 'TokenExpireError') {
        value = false
        console.log('token time put ')
      }
      console.log('error', error)
      status = false
    } else {
      console.log('decoded', decoded)
      status = true
    }
  })
  return status
}

module.exports = {
  jwtToken,
  verifyToken,
}
