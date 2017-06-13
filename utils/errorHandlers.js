const { apiFail } = require('./helpers')

exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

exports.productionErrors = (err, req, res, next) => {
  const errorCode = err.status || 500
  res.status(errorCode)
  const response = apiFail(errorCode, err.message)
  res.send(response)
}
