// routes/api/assessment
const express = require('express');
const router = express.Router();

// Load Book model
const Assessment = require('../../models/Assessment');

//Test Route
router.get('/test', (req, res) => res.send('Route testing!'));

//Get Assesment Info
router.get('/', (req, res) => {
  Assessment.find()
    .then(assessments => res.json(assessments))
    .catch(err => res.status(500).json({ message: err.message }));
});

// Creating Assessment Info
router.post('/', (req, res) => {
    Assessment.create(req.body)
    .then(assessment => res.json({ message: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to create' }));
});

// Updating Assessment Info
router.put('/:id', (req, res) => {
    Assessment.findByIdAndUpdate(req.params.id, req.body)
    .then(assessment => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// Deleting Assessment Info
router.delete('/:id', (req, res) => {
    Assessment.findByIdAndRemove(req.params.id, req.body)
    .then(assessment => res.json({ mgs: 'Removed Data successfully' }))
    .catch(err => res.status(404).json({ error: err.message }));
});

module.exports = router;