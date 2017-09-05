const mongoose = require ('mongoose');

const magic_cards_schema = new mongoose.Schema({
  name: {type: String, required: true},
  condition: String,
  rarity: {type: String, required: true},
  set: {type: String, required: true},
  quantity: Number,
  qualities: [{
    mana_cost: {type: Number, required: true, default: 0},
    color: {type: String, required: true, enum: ["black", "blue", "red", "white", "green"] },
    type: {type: String, required: true, enum: ["creature", "artifact", "instant", "sorcery", "enchantment", "planeswalker", "tribal", "land"]},
  }]
});


const Magic_cards = mongoose.model("Magic_cards", magic_cards_schema);

module.exports = Magic_cards;
