const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
}, {
    versionKey: false
})
const ItemModel = mongoose.model("item", itemSchema);
module.exports = { ItemModel };