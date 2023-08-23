const express = require('express')
const router = express.Router();

const Shipping = require('../models/shipping');

router.get('/test', (req,res) => res.send('shipping route testing!'));

router.get('/', (req, res) => {
    Shipping.find()
    .then((shipping) => res.json(shipping))
    .catch((err) => 
    res.status(404).json({noshippingfound: "No billing found"})
    );
});

router.get('/:id', (req, res) =>{
Shipping.findById(req.params.id)
    .then((shipping) => res.json(shipping))
    .catch((err) => res.status(404).json({ noshippingfound: 'No billing found'}));
});

router.post('/new-shipping',(req,res) => {
Shipping.create(req.body)
    .then((shipping) => res.json({ msgs: 'Shipping info added successfully' }))
    .catch((err) =>
    res.status(400).json({error: 'Unable to add Shipping Info'})
    );

});

router.delete('id', (req,res) => {
Shipping.findByIdAndRemove(req.params.id)
    .then(shipping => res.json({msg: "Shipping entry deleted successfully"}))
    .catch(err => res.status(404).json({error: "No such Shipping Info"}))

});

module.exports = router;