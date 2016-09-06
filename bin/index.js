#!/usr/bin/env node
const arg = require('argcon')
const sb = require('spellbook')
const req = require('../lib/request.js')
const help = require('../lib/help.js')
const deal = require('../lib/dealer.js')
var i = 0
var stats_timeout = 3
var default_cad = 10000
function stats (url, parallel, seconds) {
  console.log(`URL: ${url}`)
  console.log(`PARALLEL CADENCY: ${parallel}`)
  console.log(`STATS TIMEOUT SECONDS: ${seconds}`)
  setInterval(() => {
    console.log(`${new Date()} - REQUEST COUNT: ${i}`)
  }, seconds * 1000)
}

arg.alone(res => {
  if (!sb.empty(sb.get(res, '0')) && sb.isString(sb.get(res, '0')) && sb.get(res, '0') !== '-h' && !req.check(sb.get(res, '0'))) {
    if (!sb.empty(sb.get(res, '1')) && sb.get(res, '1') === '-c') {
      if (sb.isInteger(parseInt(sb.get(res, '2')))) {
        stats(sb.get(res, '0'), sb.get(res, '2'), stats_timeout)
        deal(parseInt(sb.get(res, '2')), (done) => {
          req.get(sb.get(res, '0'), () => {
            i++
            done()
          })
        })
      } else {
        console.log(`
        WARNING: '-c' needs a integer!\n`)
        help(default_cad, stats_timeout)
      }
    } else {
      if (!req.check(sb.get(res, '0'))) {
        console.log(`
        WARNING: Use a valid 'URL'!\n`)
        help(default_cad, stats_timeout)
      } else {
        stats(sb.get(res, '0'), default_cad, stats_timeout)
        deal(default_cad, (done) => {
          req.get(sb.get(res, '0'), () => {
            i++
            done()
          })
        })
      }
    }
  } else help(default_cad, stats_timeout)
})
