//引入通用設定
import { use, listen } from './src/config/express'

import { port } from './src/config/config'

/* 引入 swagger 文件 */
import { serve, setup } from 'swagger-ui-express'
import swaggerDocument from './swagger/swagger.json'
/* 加入 swagger */
use('/swagger', serve, setup(swaggerDocument))

//引入router
use('/api/test', require('./src/controller/test.js').default)
use('/api/Auth', require('./src/controller/auth.js').default)

//建立監聽
listen(port, () => {
  console.log(`service is listening on ${port} !!!`)

  //require('child_process').exec(`start http://localhost:${port}/swagger`)
})
