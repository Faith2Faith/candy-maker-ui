const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const ManufacturersModel = require('./manufacturers')
const ProductsModel = require('./products')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

module.exports = {
  Manufacturers,
  Products,
}
