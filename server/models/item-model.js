var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  imagesrc: {
    type: String,
  },
  category: {
    type: String
  }
});

const Item = mongoose.model("Item", ItemSchema, "items");
module.exports = Item;