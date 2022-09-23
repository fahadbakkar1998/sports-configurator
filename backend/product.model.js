const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String,
  },
  info: {
    type: Object,
  },
});

module.exports = mongoose.model('Product', Product);
