const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
 const { Card } = require('.')
 const {sequelize} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  card = await Card.create({ username: 'gandalf' })
  card = await Card.create({ mojo: 100 })
  card = await Card.create({ stamina: 100 })
  card = await Card.create({ imgURL: 'alaric-flamecaller.jpg' })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))


describe('Card', () => {
    it('has an card', async () => {
      expect(card).toHaveProperty('username')
    })
    
    it('has an card', async () => {
      expect(card).toHaveProperty('mojo')
    })

    it('has an card', async () => {
      expect(card).toHaveProperty('stamina')
    })
    it('has an card', async () => {
      expect(card).toHaveProperty('imgURL')
    })
  
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
