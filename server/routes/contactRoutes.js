const express = require('express');
const router = express.Router();

// import Contact model
const Contact = require('../models/contact');

// @route GET api/contacts/test
// @description tests contacts route
// @access Public

router.get('/test', (req, res) => res.send('contact route testing!'));

// @route GET api/
// @description Get all contacts
// @access Public

router.get('/', (req, res) => {
    Contact.find()
        .then((contact) => res.json(contact))
        .catch((err) =>
            res.status(404).json({ nocontactfound: 'No Contact found' })
        );
});

// @route GET api/:id
// @description Get single contact by id
// @access Public

router.get('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then((contact) => res.json(contact))
        .catch((err) => res.status(404).json({ nocontactfound: 'No Contact found' }));
});

// @route POST api/
// @description add/save contact
// @access Public

router.post('/new-contact', (req, res) => {
    Contact.create(req.body)
        .then((contact) => res.json({ msg: 'Contact added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this contact' })
        );
});

// @route PUT api/:id
// @description Update contact
// @access Public

router.put('/:id', (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
        .then((contact) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete contact by id
// @access Public

router.delete('/:id', (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
      .then(contact => 
        res.json({ msg: 'Contact entry deleted successfully' }))
      .catch(err => 
        res.status(404).json({ error: 'No such contact' }));
  });

  module.exports = router;
