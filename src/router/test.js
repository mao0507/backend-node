const express = require('express')
const config = require('../config/config')
const { verifyToken } = require('../controller/auth/toekn/token')
const { Select } = require('../model/sqlConnect/mysql/index.js')

const rotuer = express.Router()

/* 跟目錄測試 */
rotuer.get('/', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.summary  = '測試連線'
    #swagger.s ecurity = [{
      "bearerAuth":[]
    }]
  } */
  res.status(200)
  res.send(`此路徑是: localhost:${config.port}/api/test`)
})

/* 測試驗證TOKEN功能 */
rotuer.get('/testToken', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.summary  = '測試驗證TOKEN功能'
     #swagger.parameters['authorization'] = {
      in:header
     }
    #swagger.security = [{
      "bearerAuth":[]
    }]
  } */

  const token = (req.headers.authorization || '').split(' ')[1]
  console.log(token)

  const verify = verifyToken(token)
  if (verify) {
    res.status(200)
    res.send('Token work')
  } else {
    res.status(200)
    res.send('Token error')
  }
})

/* 驗證SQL連線 */
rotuer.get('/test/sqlConnect', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.summary  = '驗證SQL連線功能'
    #swagger.security = [{
      "bearerAuth":[]
    }]
  } */
  const table = '使用者資料'
  var response
  Select(table).then((data) => {
    response = data
    res.status(200)
    res.send(response)
  })
})

module.exports = rotuer
