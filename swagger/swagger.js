//引入swaggerAutogen，並判斷使用swagger2.0 | openapi3.0.0
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

// 文件規則
const doc = {
  info: {
    version: '1.0.0',
    title: 'REST API',
    description: '測試用', // by default: ""
  },
  host: 'localhost:9527', // by default: "localhost:3000"
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    /*
     {
      name: '' // Tag 名稱
      description: '' // Tag 描述
      },
    */
    {
      name: 'test',
      description: '測試用 API',
    },
    {
      name: 'auth',
      description: '登入相關 API',
    },
  ],
  securityDefinitions: {
    // openApi 3.0.0
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: '輸入 Token ， 方便後續功能測試',
    },
  },
  //definitions: {}, // by default: empty object
}

// 輸出的文件名稱
const outputFile = './swagger/swagger.json'
// 要指向的 API，通常使用 Express 直接指向到 app.js 就可以
const endpointsFiles = ['./app.js']
// swaggerAutogen 的方法
swaggerAutogen(outputFile, endpointsFiles, doc)
