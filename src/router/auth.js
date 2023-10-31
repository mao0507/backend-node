const express = require('express')
const { login } = require('../utils/auth/auth')

const router = express.Router()

router.post('/login', (req, res) => {
  /* 
    #swagger.tags = ['auth']
    #swagger.description = '登入功能'
    #swagger.parameters['json'] = {
      in:'body',
      description:'輸入帳號、密碼',
      required:true,
      type:'string'
    }
   
    #swagger.requestBody = {
      required:false,
    }
  } */

  const { account, password } = req.body
  const response = login({ account, password })
  res.status(200)
  res.send(response)
})

module.exports = router
