
const path = require('path')
const fs = require('fs/promises')

module.exports = async (default_cad, stats_timeout) => {
  const pkg_data = await fs.readFile(path.resolve(__dirname, '../package.json'), 'UTF-8')  
  const pkg = JSON.parse(pkg_data)

  console.log(`
  mreq ${pkg.version} - ${pkg.description}
  Usage:
      mreq [URL] [-c [CADENCY]] [-t [STATS_TIMEOUT]]

    -c   Cadency setter. (Optional value. Default set in ${default_cad}.)
    -t   Stats timeout setter. (Optional value. Default set in ${stats_timeout} seconds.)

  ${pkg.license} License - ${pkg.author.name} (${pkg.author.email})

  `)
}
