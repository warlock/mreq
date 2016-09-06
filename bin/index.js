#!/usr/bin/env node
const arg = require('argcon')
const sb = require('spellbook')
const req = require('../lib/request.js')
const help = require('../lib/help.js')
const deal = require('../lib/dealer.js')
var i = 0
var stats_timeout = 3
var default_cad = 10000
function stats(seconds) {
  setInterval(() => {
    console.log(new Date() + " - REQUEST COUNT: " + i)
  }, seconds * 1000)
}

arg.alone(res => {
  if (!sb.empty(sb.get(res, '0')) && sb.isString(sb.get(res, '0')) && sb.get(res, '0') !== '-h' ) {
    if (!sb.empty(sb.get(res, '1')) && sb.get(res, '1') === '-c') {
      if (sb.isInteger(parseInt(sb.get(res, '2')))) {
        console.log('URL: ' + sb.get(res, '0'))
        console.log('CADENCY PARALLEL REQUESTS: ' + sb.get(res, '2'))
        console.log('STATS TIMEOUT SECONDS: ' + stats_timeout)
        stats(stats_timeout)
        deal(parseInt(sb.get(res, '2')), function (done) {
          req.get(sb.get(res, '0'), function () {
            i++
            done()
          })
        })
      } else {
        console.log('-c needs a CADENCY parallel requests')
        console.log('')
        help(default_cad, stats_timeout)
      }
    } else {
      console.log('URL: ' + sb.get(res, '0'))
      console.log('DEFAULT CADENCY PARALLEL REQUESTS: ' + 1)
      console.log('STATS TIMEOUT SECONDS: ' + stats_timeout)
      stats(stats_timeout)
      deal(default_cad, function (done) {
        req.get(sb.get(res, '0'), function () {
          i++
          console.log(i)
          done()
        })
      })
    }
  } else {
    help(default_cad, stats_timeout)
  }
})
