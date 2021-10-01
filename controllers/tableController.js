const apiError = require('../errors/apiError')
const {Table} = require('../models/models')
class TableController {
    async getRows (req, res, next) {
        let {name, count, distance, limit, page} = req.query
        page = page || 1
        limit =  limit || 10
        let offset = page * limit - limit
        let list
        if(!name && !count && !distance){
            list = await Table.findAndCountAll({limit, offset})
        }
        if(name && !count && !distance){
            list = await Table.findAndCountAll({where: {name}, limit, offset})
        }
        if(!name && count && !distance){
            list = await Table.findAndCountAll({where: {count}, limit, offset})
        }
        if(!name && !count && distance){
            list = await Table.findAndCountAll({where: {distance}, limit, offset})
        }
        return res.json(list)
    }
    async postRow (req, res, next) {
        const {date, name, count, distance} = req.body
        if(!date || !name || !count || !distance){
            return next(apiError.badRequest('не все поля заполнены'))
        }
        const type = await Table.create({date, name, count, distance})
        return res.json(type )

    }
}

module.exports = new TableController()