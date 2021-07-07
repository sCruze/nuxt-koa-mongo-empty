// Данный файл служит для проверки ключа
if (process.env.NODE_ENV === 'production') {
  // Ключ для продакшен версии
  module.exports = require('./keys.prod')
} else {
  // Ключ разработки
  module.exports = require('./keys.dev')
}
