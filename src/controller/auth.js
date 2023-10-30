import { Router } from 'express'
import { login } from '../utils/auth/auth'

const router = Router()

router.post('/Login', (req, res) => {
  /* 
    #swagger.tags = ['auth']
    #swagger.description = '登入功能'
    #swagger.parameters['data'] = {
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

export default router
