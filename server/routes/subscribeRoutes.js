const express = require('express')
const router = express.Router()

const Subscribe = require('../models/subscribe')

router.get('/test', (req, res) => res.send('subscribe route testing!'))

router.get('/', (req, res) => {
    Subscribe.find()
        .then((subscribe) => res.json(subscribe))
        .catch((err) =>
        res.status(404).json({nosubscribefound: 'No subscriber found'}))

});

router.get('/:id',(req,res) => {
    Subscribe.findById(req.params.id)
    .then((subscribe) => res.json(subscribe))
    .catch((err) => res.stauts(404.).json({nosubscribefound: 'No subscriber found'}))
});

router.post('/new-subscribe', (req, res) => {
    Subscribe.create(req.body)
    .then((subscribe) => res.json({msg: "Subscriber added successfully"}))
    .catch((err) =>
    res.status(400).json({error: 'Unable to add this subscriber'}))
})

router.put('/:id', (req,res) => {
    Subscribe.findByIdAndUpdate(req.params.id, req.body)
    .then((subscribe) => res.json({msg: 'Updated successfully'}))
    .catch((err) =>
    res.status(400).json({error: 'Unable to update the Database'})
    );
});

router.delete('/:id', (req, res) => {
    Subscribe.findByIdAndRemove(req.params.id)
    .then(contact => res.json({msg: 'Subscriber entry deleted successfully'}))
    .catch(err => res.status(404).json({ error: 'No such subscriber'}))

});

module.exports = router;