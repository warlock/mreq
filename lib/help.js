const pkg = require('../package.json')

module.exports = (default_cad, stats_timeout) => {
  console.log(`
  mreq ${pkg.version} - ${pkg.description}
  Usage:
      mreq [URL] [-c [CADENCY]]

    -c   Cadency setter. (Optional value. Default set in ${default_cad}.)
    -t   Stats timeout setter. (Optional value. Default set in ${stats_timeout} seconds.)
    -h   Show this message.

  ${pkg.license} License - ${pkg.author.name} (${pkg.author.email})

  `)
}
