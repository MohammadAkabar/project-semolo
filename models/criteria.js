'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Criteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Criteria.hasMany(models.AlternateData)
      Criteria.belongsTo(models.Asset)
    }
  }
  Criteria.init(
    {
      name: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      normalize: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Criteria',
      tableName: 'criterias',
      underscored: true,
    }
  )
  return Criteria
}
