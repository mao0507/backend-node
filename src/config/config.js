/* config.js */
// require and configure dotenv, will load vars in .env in PROCESS.ENV

/**
 * 通用設定位置
 * env 環境名稱
 * port 要開放的port
 * version 版本號
 */
const config = {
  version: '1.0.0',
  env: 'development',
  port: '9527',
}

module.exports = config
