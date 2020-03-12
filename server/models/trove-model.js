var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TroveSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    imgurl: {
        type: String,
        trim: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    }]
});

module.exports = mongoose.model("Troves", TroveSchema, "troves");

