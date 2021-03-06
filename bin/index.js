#!/usr/bin/env node
const arg = require('argcon')
const snc = require('snc')
const req = require('../lib/req')
const help = require('../lib/help')
var stats_timeout = 3
var default_cad = 10000
var counter = 0

const testurl = url => {
  const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/
  if(!regex.test(url)) return false
  else return true
}

arg.on('-c', res => { // CADENCYA
  default_cad = res
})

arg.on('-t', res => {
  stats_timeout = res
})

arg.on(res => {
  if (res.length < 3) help(default_cad, stats_timeout)
  else {
    if (res[2] !== undefined && testurl(res[2])) {
      console.log(`URL: ${res[2]}\nPARALLEL CADENCY: ${default_cad}\nSTATS TIMEOUT SECONDS: ${stats_timeout}`)
      setInterval(() => {
        console.log(`${new Date()} - PARALLEL CADENCY ${default_cad} - REQUEST COUNT: ${counter}`)
      }, stats_timeout * 1000)
      snc.fp(default_cad, (count, done) => {
        counter = count
        req(res[2])
          .then(done)
          .catch(done)
      })
    }
  }
})
