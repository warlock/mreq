module.exports = function (cadency, req) {
  function done() { req(done) }
  for (var i = 0; i < cadency;i++) {
    setTimeout(function () {
      req(done)
    }, 0)
  }
}
