/* 加入依賴 */
import express from 'express'
import { port, env } from './config.js'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'

/* 建立服務 */
const app = express()

/* 加入擴充功能 */
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: true }))

/* GET 跟目錄測試. */
app.get('/', (req, res) => {
  res.send(
    `service started on  port http://127.0.0.1:${port} (${env})`
  )
})

export default app
