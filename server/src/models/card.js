const { sequelize, DataTypes, Sequelize } = require("../db/config");

const Card = sequelize.define("Card", {
    //id: DataTypes.NUMBER,
    username: DataTypes.STRING,
    mojo: DataTypes.NUMBER,
    stamina: DataTypes.NUMBER,
    imgURL: DataTypes.STRING
  })

  module.exports = {
    Card
    
  }