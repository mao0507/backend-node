const express = require('express')
const router = express.Router()
const { responseModule } = require('../model/commonModel')
const { verifyToken } = require('../utils/auth/token/token')


// template for get api 
router.get('/get1', (req, res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API GET 範例1'
    #swagger.description = '無須token驗證，無帶任何參數'
  } */

  const response = responseModule(
    true,
    200,
    '無須token驗證，無帶任何參數，get成功',
    null)

  res.status(200).send(response)
})

router.get('/get2', (req, res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API GET 範例2'
    #swagger.description = '無須token驗證，有帶參數'
    #swagger.parameters['variable1'] = {
      in: 'query',
      description: "variable1 string type",
      type:'string'
    }
    #swagger.parameters['variable2'] = {
      in: 'query',
      description: "variable2 number type",
      type:'number'
    }
  } */

  const request = req.query
  const response = responseModule(
    true,
    200,
    '無須token驗證，有帶參數',
    request
  )

  res.status(200).send(response)
})

router.get('/get3', (req, res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API GET 範例3'
    #swagger.description = '須token驗證，無帶任何參數'
    #swagger.auto = false
     #swagger.security = [{
      "bearerAuth":[]
    }]
  } */

  const token = (req.headers.authorization || '').split(' ')[1]
  console.log(token)

  const verify = verifyToken(token)

  if (verify) {
    const response = responseModule(
      true,
      200,
      '驗證成功',
      token)
      res.status(200).send(response)
  }
  else {
    const response = responseModule(
      true,
      200,
      '驗證失敗',
      token)
      res.status(200).send(response)
  }
  
})


// template for post api 
router.post('/post1', (req,res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API POST 範例1'
    #swagger.description = '無須token驗證，無帶任何參數'
  } */

  const response = responseModule(
    true,
    200,
    '無須token驗證，無帶任何參數，post成功',
    null)

  res.status(200).send(response)
})

router.post('/post2', (req,res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API POST 範例2'
    #swagger.description = '無須token驗證，帶參數'
  } */

  const { variable1 , variable2 } = req.body

  const response = responseModule(
    true,
    200,
    '無須token驗證，帶參數，post成功',
    { variable1, variable2 })

  res.status(200).send(response)
})


router.post('/post3', (req,res) => {
  /* 
    #swagger.tags = ['template']
    #swagger.summary  = 'API POST 範例3'
    #swagger.description = '須token驗證，帶參數'
    #swagger.auto = false
    #swagger.security = [{
      "bearerAuth":[]
    }]
    #swagger.requestBody  = {
      required: false,
      content: {
        "application/json": {
          schema: { $ref: "" },
          example: {
            variable1:'any',
            variable2:'any',
          } 
        }
      }
    }
  } */

  const { variable1 , variable2 } = req.body

  const token = (req.headers.authorization || '').split(' ')[1]
  console.log(token)

  const verify = verifyToken(token)

  if (verify) {
    const response = responseModule(
      true,
      200,
      '須token驗證，帶參數，post成功，驗證成功',
      { token, variable1, variable2 } )
      res.status(200).send(response)
  }
  else {
    const response = responseModule(
      true,
      200,
      '驗證失敗',
      token)
      res.status(200).send(response)
  }

 
})

module.exports = router