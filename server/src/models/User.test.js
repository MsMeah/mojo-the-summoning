const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
//const db = require('../db/config')
const {sequelize, DataTypes, Sequelize } = require("../db/config");

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('username')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
