const { sequelize, Sequelize, DataTypes } = require("../db/config");

const Deck = sequelize.define("Deck", {
    //id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    xp: DataTypes.NUMBER
  })

  module.exports = {
    Deck
  }