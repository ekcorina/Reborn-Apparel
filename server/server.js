const express = require('express');
const app = express();
const connectDB = require('./config/db');

const cors = require('cors')
const contactRoutes = require('../server/routes/contactRoutes');
const subscribeRoutes = require('../server/routes/subscribeRoutes');
const shippingRoutes = require('../server/routes/shippingRoutes');
const productRoutes = require('../server/routes/productRoutes')
require('dotenv').config()

connectDB();


app.use(cors())

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/product', productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
