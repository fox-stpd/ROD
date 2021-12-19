const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require ('../models/models')
const ApiError = require('../errors/ApiError')

class ProductController {
    async create(req,res) {
        try {
            let {name, price, typeId, countryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname,'..', 'static', fileName))


            const product = await Product.create({name,price,typeId,countryId,img:fileName})

            if (info)
            {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }


            return res.json(product)
        }
        catch (e) {
                next(ApiError.badRequest(e.message))
            }

    }

    async getAll(req,res) {
        let {countryId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!countryId && !typeId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (countryId && !typeId) {
            products = await Product.findAndCountAll({where:{countryId}, limit, offset})
        }
        if (!countryId && typeId) {
            products = await Product.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (countryId && typeId) {
            products = await Product.findAndCountAll({where:{countryId, typeId}, limit, offset})
        }
        return res.json(products)


    }

    async getOne(req,res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }

}

module.exports = new ProductController()