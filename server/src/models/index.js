// import the rest of your models above
const { User } = require('./User')
const { Card } = require('./card')
const { Deck } = require('./deck')
const { Attack } = require('./attack')
//set up the associations here

User.hasOne(Deck),
Deck.belongsTo(User)

Deck.hasMany(Card),
Card.belongsTo(Deck)

Card.belongsToMany(Attack, {through: "Card-Attack"});
Attack.belongsToMany(Card, {through: "Card-Attack"}); 


// and then export them all below
module.exports = { User, Card, Deck, Attack }
