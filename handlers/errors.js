// Здесь мы опишем свою middleware функцию
// Экспортируем функцию, которая принимает ctx(контекст) и функцию next
// которая будет вызвана, кода будет выполнена основная задача данной функции
// В данном случае мы должны перехватить все ошибки
module.exports = async (ctx, next) => {
  // В блоке try, дожидаемся выполнения остальных middleware функций и в случае ошибки, в блоке catch указываем статус
  // который получаем из перехваченой ошибки и если его не будет то статус 500
  try {
    await next()
  } catch (e) {
    ctx.status = e.status || 500
    // В теле, указываем ошибку или по умолчанию 'Internal server Error'
    ctx.body = { error: e.message || 'Internal Server Error' }
  }
}