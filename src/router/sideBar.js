const express = require('express')
const { responseModule } = require('../model/commonModel')
const sideBar = require('../model/sideBar')
const router = express.Router()

router.get('/', (req,res) => {

  /* 
    #swagger.tags = ['sideBar']
    #swagger.summary  = '取得sideBar'
     #swagger.parameters['authorization'] = {
      in:header
     }
    #swagger.security = [{
      "bearerAuth":[]
    }]
  } */
  
  
  const response = responseModule(true,200,'',sideBar)
  
  res.status = 200
  res.send(response)
})

module.exports = router;