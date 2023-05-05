const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
//const db = require('../db/config')
const {sequelize,DataTypes, Sequelize } = require("../db/config");

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  deck = await Deck.create({ name: 'gandalf' })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('name')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
