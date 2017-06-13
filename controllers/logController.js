// Requires:
const mongoose = require('mongoose')
const Log = require('../models/Log')
const h = require('../utils/helpers')

// Controller methods:

exports.getLogsByHash = async (req, res, next) => {
  const hash = req.params.hash
  const logs = await Log.find({ 'hash': hash })
  const response = h.apiResponse(logs)
  res.status(200).send(response)
}

exports.setLogs = async (req, res, next) => {
  // TODO: accept an array of logs to allow to save a buch of them on one single request

  if (typeof req.body.hash !== 'string' || typeof req.body.text !== 'string') {
    const fail = h.apiFail(400, 'Bad Request: hash and text are required params')
    res.status(400).send(fail)
    return
  }

  const log = new Log(req.body)
  await log.save() // This is what actually stores the data on database.
  const response = h.apiResponse(log)
  res.status(200).send(response)
}
