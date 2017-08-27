const server = require('./main')
const debug = require('debug')('app:bin:server')
const port = 80
const host = '/'
server.listen(port)
