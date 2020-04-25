export default (connection, Sequelize, Manufacturers) => connection.define('products', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  yearIntroduced: { type: Sequelize.DATEONLY },
  manufacturerId: { type: Sequelize.INTEGER, references: { model: Manufacturers, key: 'id' } },
}, { paranoid: true })
