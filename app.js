//引入通用設定
const app = require('./src/config/express')

const config = require('./src/config/config')

/* 引入 swagger 文件 */
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger/swagger.json')
/* 加入 swagger */
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//引入router
app.use('/api/test', require('./src/router/test.js'))
app.use('/api/Auth', require('./src/router/auth.js'))

//建立監聽
app.listen(config.port, () => {
  console.log(`service is listening on ${config.port} !!!`)

  //require('child_process').exec(`start http://localhost:${port}/swagger`)
})
