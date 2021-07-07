require('dotenv').config()

const Koa = require('koa')
// Импортируем ключи
// const keys = require('./keys')
// Импортируем handlers
const handlers = require('../handlers')

// Подключение контроллеров
const controllers = require('./controllers')

// Передаем в перменную объект Koa
const app = new Koa()

// Добовляем все handlers в приложение
handlers.forEach(h => app.use(h))

// Используем контрллеры
app
  .use(controllers.routes())
  .use(controllers.allowedMethods())

module.exports = app
