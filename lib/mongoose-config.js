/*
* Здесь описывается логика подключения к БД mongoose
* */
// Импортируем consola, для более удобного отображения информации в консоли
const consola = require('consola')

// Импортируем mongoose
const mongoose = require('mongoose')

// Загружаем все конфигурации из файла config
const config = require('./config')

module.exports = () => {
  mongoose
    // В connect указываем соответсвующие конфигурации для подключения к БД
    .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    // Если подключение к БД произошло удачно, выводим соответствующее подключение
    .then(() => consola.ready({
      message: 'MongoDB has been connected',
      badge: true
    }))
    // Если случились ошибки, выводим их в консоль
    .catch((err) => {
      consola.error({
        message: `Mongo error: ${new Error(err)}`
      })
      process.exit(1)
    })
}
