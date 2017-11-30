const pkg = require('../package.json')

module.exports = (default_cad, stats_timeout) => {
  console.log(`
  mreq ${pkg.version} - ${pkg.description}
  Usage:
      mreq [URL] [-c [CADENCY]] [-t [STATS_TIMEOUT]]

    -c   Cadency setter. (Optional value. Default set in ${default_cad}.)
    -t   Stats timeout setter. (Optional value. Default set in ${stats_timeout} seconds.)

  ${pkg.license} License - ${pkg.author.name} (${pkg.author.email})

  `)
}
