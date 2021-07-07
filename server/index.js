require('dotenv').config()

const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// Подключение к БД
const mongooseConfig = require('../lib/mongoose-config')

// Экспортировали само приложение в переменную app
const app = require('./app')

// Асинхронная функция для старта сервера
async function start () {
  try {
    // Вызов функции подключения к БД
    await mongooseConfig()

    console.log('Start');

    const host = process.env.HOST || '127.0.0.4'
    const port = process.env.PORT || 3000

    // Import and Set Nuxt.js options
    const config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    app.use((ctx) => {
      ctx.status = 200
      ctx.respond = false // Mark request as handled for Koa
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    })

    // Listen the server
    await app.listen(port, host)
    consola.ready({
      message: `Server has been started http://${host}:${port}`,
      badge: true
    })
  } catch (e) {
    consola.error('Server error', new Error(e))
    process.exit(1)
  }
}

// Вызов функции запуска сервера
start()
