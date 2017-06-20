// Requires:
const express = require('express')
const router = express.Router()
const logController = require('../controllers/logController')
const { catchErrors } = require('../utils/errorHandlers')

// Routes definition:
router.get('/', logController.indexPage)
router.get('/:hash', logController.logsView)

router.get('/api/v1/logs/:hash', catchErrors(logController.getLogsByHash))
router.post('/api/v1/logs', catchErrors(logController.setLogs))

module.exports = router
