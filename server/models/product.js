const mongoose = require('mongoose');
require('dotenv').config();



const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    price: {
      type: Number,    
    },
    image: {
      type: String
    }


  });
  
  module.exports = Product = mongoose.model('product', ProductSchema);