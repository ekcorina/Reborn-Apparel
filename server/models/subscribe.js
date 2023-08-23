const mongoose = require('mongoose');
require('dotenv').config()

const SubscribeSchema = new mongoose.Schema({

subscription:{
    type: String,

}

});

module.exports = Subscribe = mongoose.model('subscribe', SubscribeSchema); 