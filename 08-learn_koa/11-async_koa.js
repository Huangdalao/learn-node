const Koa = require('koa')
const axios = require('axios')

// 创建 app 对象
const app = new Koa()

// 注册中间件
// 1.koa 的中间件1
app.use(async (ctx, next) => {
  console.log('koa middleware01')
  ctx.msg = 'aaa'
  await next()
  console.log('1')

  // 返回结果
  ctx.body = ctx.msg
})

// 2.koa 的中间件2
app.use(async (ctx, next) => {
  console.log('koa middleware02')
  ctx.msg += 'bbb'
  // 如果执行的下一个中间件，是一个异步函数, 那么 next 默认不会等到中间件的结果, 就会执行下一步操作
  // 如果希望等待下一个异步函数的执行结果, 那么需要在 next 函数前面加 await；
  await next()
  console.log('2')
})

// 3.koa 的中间件3
app.use(async (ctx, next) => {
  console.log('koa middleware03')
  // 网络请求
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  ctx.msg += res.data.data.banner.list[0].title
})

// 启动服务器
app.listen(8888, () => {
  console.log('koa服务器启动成功~')
})