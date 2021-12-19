const Routes = require('express')
const router = new Routes()
const typeController = require('../controllers/typeController')
const checkRole = require('../meddleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN') ,typeController.create)
router.get('/', typeController.getAll)


module.exports = router