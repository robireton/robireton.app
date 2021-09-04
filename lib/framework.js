import express from 'express'
import hbs from 'express-handlebars'
import path from 'path'
import favicon from 'serve-favicon'
import logging from './logging.js'
import scriptName from './script-name.js'
import routes from './routes.js'

const app = express()

app.engine('.hbs', hbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', '.hbs')
app.set('trust proxy', ['loopback', 'uniquelocal'])

app.use(favicon(path.resolve('static/favicon.ico')))
app.use(express.static(path.resolve('static')))

app.use(logging)
app.use(scriptName)
app.use(routes)

export default app
