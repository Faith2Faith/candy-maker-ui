import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import ManufacturersModel from './manufacturers'
import ProductsModel from './products'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

export default {
  Manufacturers,
  Products,
}
