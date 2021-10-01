const Router = require('express')
const router = new Router
const tableRouter = require('./tablesRouter')

router.use('/table', tableRouter)


module.exports = router