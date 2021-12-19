const Routes = require('express')
const router = new Routes()
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const countryRouter = require('./countryRouter')
const userRouter = require('./userRouter')




router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/country', countryRouter)
router.use('/product', productRouter)


module.exports = router