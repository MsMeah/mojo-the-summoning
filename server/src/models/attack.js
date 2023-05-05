const { sequelize, DataTypes, Sequelize } = require("../db/config");

const Attack = sequelize.define("Attack", {
    //id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.NUMBER,
    staminaCost: DataTypes.NUMBER
  })

  module.exports = {
    Attack
  }