const http = require('http')
const httppool = new http.Agent
httppool.maxSockets = 1000
httppool.requests = 1000
const request = require('request')

const req = {
  check : function (url) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(url)) return false
    else return true
  },
  options : function (url) {
    return {
      url: url,
      timeout : 1000,
      jar: true,
      pool: httppool,
      followAllRedirects : true,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
      }
    }
  },
  get : (url, callback) => {
    request(req.options(url), () => { callback() }).setMaxListeners(0)
  }
}

module.exports = req
