const Routes = require('express')
const router = new Routes();
const userController = require('../controllers/userController')
const authMiddleware = require('../meddleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)



module.exports = router