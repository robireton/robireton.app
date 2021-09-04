import { timestamp } from '@robireton/chrono'
import { Router } from 'express'
import config from './config.js'

const router = Router()

router.all('*', (req, _res, next) => {
  const fields = []
  config.log.stamp && fields.push(timestamp())
  config.log.method && fields.push(req.method)
  config.log.path && fields.push(req.originalUrl)
  config.log.user && fields.push(req.user ? req.user.id : '—unauthenticated—')
  config.log.ip && fields.push(req.ip)
  config.log.ua && fields.push(req.headers['user-agent'] || '')
  fields.length > 0 && console.log(fields.join('\t'))

  next()
})

export default router
