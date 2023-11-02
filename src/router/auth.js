const express = require('express')
const { login } = require('../utils/auth/auth')

const router = express.Router()

router.post('/login', (req, res) => {
  /* 
    #swagger.tags = ['auth']
    #swagger.summary  = '登入功能'
    #swagger.description = '登入功能'
  } */
  console.log('body',req.body)
  const { account, password } = req.body
  
  const response = login({ account, password })
  res.status(200)
  res.send(response)
})

module.exports = router
