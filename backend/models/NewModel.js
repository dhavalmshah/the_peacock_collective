const { OPTIONS, generateURl } = require('../config/options/global.options');

module.exports = (sequelize, DataTypes) => {
  const New = sequelize.define(
    'New',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fromDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      toDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      eventOutfit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jewelryOption: {
        type: DataTypes.ENUM(
          OPTIONS.jewelryOption.YES,
          OPTIONS.jewelryOption.NO,
        ),
        allowNull: true,
      },
    },
    {
      tableName: 'New',
      timestamps: true,
    }
  );

  return New;
};