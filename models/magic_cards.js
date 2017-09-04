const mongoose = require ('mongoose');

const magic_cards_schema = new mongoose.Schema({
  condition: {quality: String, required: true},
  rarity: {type: String, required: true},
  set: {expansion: String, required: true},
  quantity: Number
  qualities: [{
    mana_cost: {type: Number, required: true, default: 0},
    color: {type: String, required: true},
    type: {type: String, required: true}
  }]
})


const Magic_cards = mongoose.model("Magic_cards", magic_cards_schema);

module.exports = Magic_cards;
