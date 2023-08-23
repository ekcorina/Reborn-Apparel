const express = require('express');
const router = express.Router();



const Product = require('../models/product');

router.get('/test', (req, res) => res.send('Prouduct route testing'));

router.get('/', (req, res) => {
    Product.find()
        .then((product) => res.json(product))
        .catch((err) => 
         res.status(404).json({ noproductfound: 'No Product found' })
        );
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(404).json({ noproductfound: 'No Product found' }));

});

router.post('/new-product', (req, res) => {
    Product.create(req.body)
        .then((product) =>res.json({msg: 'Product added successfully' }))
        .catch((err) => 
        res.status(400).json(
        {error: 'Unable to add this product'})
        );
});

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then((product) => res.json({msg: ' Updated successfully'}))
        .catch((err) => 
        res.status(400).json({ error: 'Unable to update the Database'})
        );
});

router.delete('/:id', (req, res) =>{
    Product.findByIdAndRemove(req.params.id)
        .then(product => res.json({msg: 'Product entry deleted successfully'}))
        .catch(err => res.status(404).json({ error: 'No such product'}));
});

module.exports = router;