const mongoose = require('mongoose');
require('dotenv').config();

const ContactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    subject: {
      type: String
    },
    message: {
        type: String
 
    }

  });
  
  module.exports = Contact = mongoose.model('contact', ContactSchema);