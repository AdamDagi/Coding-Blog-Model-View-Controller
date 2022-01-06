const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Coments extends Model {}

Coments.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exhibition_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postcard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'postcards',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Coments',
  }
);

module.exports = Coments;