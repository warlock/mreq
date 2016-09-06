module.exports = function (default_cad, stats_timeout) {
  console.log(`
  mreq - Massive Request tester for Node.js
  Usage:
      mreq [URL] [-c [CADENCY]]

    -c   Cadency setter. (Optional value. Default set in ${default_cad}.)
    -t   Stats timeout setter. (Optional value. Default set in ${stats_timeout} seconds.)
    -h   Show this message.

  The MIT License (MIT) - Josep Subils Rigau (josep@spellbook.io)

  `);
}
