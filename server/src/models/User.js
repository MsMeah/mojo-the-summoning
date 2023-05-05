 // create your User model here
// create your User model here
const { sequelize, DataTypes, Sequelize } = require("../db/config");

const User = sequelize.define("User", {
    username: DataTypes.STRING,
  })



  module.exports = {
    User
  }