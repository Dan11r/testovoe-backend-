const sequelize = require('../db')
const DataTypes = require('sequelize')

const Table = sequelize.define('table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    date: {type: DataTypes.STRING},
    name:{type: DataTypes.STRING},
    count:{type:DataTypes.INTEGER},
    distance:{type: DataTypes.INTEGER}
})

module.exports = {
    Table
}