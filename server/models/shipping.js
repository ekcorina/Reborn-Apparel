const mongoose = require('mongoose');
require('dotenv').config()


const ShippingSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mailingAddress: [{
      address: {
        type: String,
      },
      city:{
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipCode:{
        type: Number,
        required: true
      }
    }],

    payment: [{
      nameOnCard: {
        type: String,
        required: true
      },
      creditCard:{
        type: Number,
        required: true
      },
      expMonth: {
        type: String,
        required: true
      },
      expYear: {
        type: Number,
        required: true
      },
      cvv:{
        type: Number
      }
    }]
    
  });
  
  module.exports = Shipping = mongoose.model('shipping', ShippingSchema);
