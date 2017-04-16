const cookieSession = require('cookie-session')

module.exports = opts => {
  const originalSession = cookieSession(opts)
  return (res, req) => originalSession(res, req, () => {})
}
