const http = require('http')
const httppool = new http.Agent()
httppool.maxSockets = 1000
httppool.requests = 1000
const tck = require('tck')

module.exports = data => {
  return new Promise((resolve, reject) => {
    if (tck.empty(data) || !tck.isString(data)) reject("ERROR: URL VALUE IS EMPTY!!!")
    else {
      httppool.get({
        hostname: 'js.gl',
        port: 80,
        path: '/',
        agent: false  // create a new agent just for this one request
      }, () => {
        resolve()
      });
    }
  })
}
