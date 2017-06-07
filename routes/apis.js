const router = require('koa-router')()
const attend = require('../models/attend')

router.prefix('/api/v1')

router.get('/all', async (ctx, next) => {
  try {
    let attendList = await attend.find()
    ctx.body = {
      data: attendList
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      data: 'Fetch Data Error'
    }
  }
})

router.post('/create', async (ctx, next) => {
  let token = ctx.request.body.token
  let name = ctx.request.body.name
  let school = ctx.request.body.school

  let tokenPre = ''

  if(!token || token !== tokenPre) {
    ctx.body = {
      data: 'Token Error'
    }
    return
  }

  if(!name) {
    ctx.body = {
      data: 'Name is required'
    }
    return
  }

  if(!school) {
    ctx.body = {
      data: 'School is required'
    }
    return
  }

  let newly = {
    name: name,
    school: school
  }

  try {
    let createData = await attend.create(newly)
    ctx.body = {
      data: createData
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      data: 'Create Data Failed'
    }
  }

})

module.exports = router
