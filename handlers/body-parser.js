const bodyParser = require('koa-bodyparser')

// Экспортируем результат вызова функции из koa-bodyparser
// она возвращает middleware функцию, в которой будет происходить парсинг тела запросов
module.exports = bodyParser()
