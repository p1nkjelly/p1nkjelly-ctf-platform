let express = require('express')
let cookieParser = require('cookie-parser')
let cors = require('cors')
let corsConfig = require('./config/cors')

let indexRouter = require('./routes/index')

let app = express()
app.use(cors(corsConfig))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

app.use(function(req, res) {
  res.status(400)
  res.json({
    success: false,
    message: 'error'
  })
})

app.use(function(err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json({
    success: false
  })
})

module.exports = app
