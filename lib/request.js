var http = require('http')
var httppool = new http.Agent
httppool.maxSockets = 1000
httppool.requests = 1000
var request = require('request')

var req = {
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
  get : function (url, callback) {
    request(req.options(url), () => { callback() })
  }
}

module.exports = req
