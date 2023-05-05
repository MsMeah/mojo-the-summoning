const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
 const { Attack } = require('.')
 const {sequelize} = require('../db/config')

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  attack = await Attack.create({ title: 'gandalf' })
  attack = await Attack.create({ mojoCost: 10 })
  attack = await Attack.create({ staminaCost: 10 })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('Attack', () => {
  it('has an card', async () => {
    expect(attack).toHaveProperty('title')
  })

  it('has an card', async () => {
    expect(attack).toHaveProperty('mojoCost')
  })

  it('has an card', async () => {
    expect(attack).toHaveProperty('staminaCost')
  })



  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
