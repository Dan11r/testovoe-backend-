const Router = require('express')
const router = new Router
const tableController = require('../controllers/tableController')


router.get('/',tableController.getRows)
router.post('/',tableController.postRow)

module.exports = router