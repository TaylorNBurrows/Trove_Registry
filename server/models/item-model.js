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
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const ItemPost = mongoose.model("ItemPost", ItemSchema);
module.exports = ItemPost;