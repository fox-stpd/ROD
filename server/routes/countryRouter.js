const Routes = require('express')
const router = new Routes()
const countryController = require('../controllers/countryController')
const checkRole = require("../meddleware/checkRoleMiddleware");


router.post('/', checkRole('ADMIN'), countryController.create)
router.get('/', countryController.getAll)


module.exports = router