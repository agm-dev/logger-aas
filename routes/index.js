// Requires:
const express = require('express')
const router = express.Router()
const logController = require('../controllers/logController')
const { catchErrors } = require('../utils/errorHandlers')

// Routes definition:
router.get('/', (req, res) => {
  res.send(process.env.APP_NAME || 'app-name');
})

router.get('/api/v1/logs/:hash', catchErrors(logController.getLogsByHash))
router.post('/api/v1/logs', catchErrors(logController.setLogs))

module.exports = router