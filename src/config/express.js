/* 加入依賴 */
const express = require('express')
const config = require('./config.js')
const bodyParser = require('body-parser')
const helmet = require('helmet')

/* 建立服務 */
const app = express()

/* 加入擴充功能 */
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* GET 跟目錄測試. */
app.get('/', (req, res) => {
  res.send(
    `service started on  port http://127.0.0.1:${config.port} (${config.env})`
  )
})

module.exports = app
