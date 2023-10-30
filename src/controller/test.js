import { Router } from 'express'
import { port } from '../config/config'
import { verifyToken } from '../utils/auth/token/token'
import {default as mock} from '../model/sqlConnect/mysql/index.js'
const { Select } = mock

const router = Router()

/* 跟目錄測試 */
router.get('/', (req, res) => {
  /* 
    #swagger.tags = ['test']
    #swagger.summary  = '測試連線'
    #swagger.security = [{
      "bearerAuth":[]
    }]
  } */
  res.status(200)
  res.send(`此路徑是: localhost:${port}/api/test`)
})

/* 測試驗證TOKEN功能 */
router.get('/testToken', (req, res) => {
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
router.get('/test/sqlConnect', (req, res) => {
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

export default router
