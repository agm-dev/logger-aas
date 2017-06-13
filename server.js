// Requires:
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/index')
const errorHandlers = require('./utils/errorHandlers')

require('dotenv').config()

// Connection to our MongoDB Database:
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell mongoose to use Node ES6 promises
mongoose.connection.on('error', err => {
  console.error(`mongoose connection: ${err.message}`)
})

// Server set up:
const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use('/', router)
server.use(errorHandlers.notFound)
server.use(errorHandlers.productionErrors)

const port = process.env.SERVER_PORT || 8000
server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
