const Routes = require('express')
const router = new Routes()
const productController = require('../controllers/productController')
const checkRole = require('../meddleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'),productController.create)
router.get('/',productController.getAll)
router.get('/:id',productController.getOne)

module.exports = router