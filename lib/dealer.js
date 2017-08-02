module.exports = (cadency, req) => {
  const done = () => { req(done) }
  for (var i = 0; i < cadency;i++) {
    setTimeout(() => {
      req(done)
    }, 0)
  }
}
