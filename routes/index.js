const router = require('koa-router')()
const db = require('../db/model/article')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/queryArticle', async (ctx, next) => {
  let data = await db.QuerySingle('queryArticle')
  ctx.body = data
})

module.exports = router
