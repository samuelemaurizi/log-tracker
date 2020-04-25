const express = require('express');
const router = express.Router();

// @route     GET api/logs
// @desc      Get all logs
router.get('/', (req, res) => {
  res.send('Get all logs');
});

// @route     POST api/logs
// @desc      Add new log
router.post('/', (req, res) => {
  res.send('Add new log');
});

// @route     PUT api/logs/:id
// @desc      Update log
router.put('/:id', (req, res) => {
  res.send('Update a log');
});

// @route     DELETE api/logs/:id
// @desc      Delete log
router.delete('/:id', (req, res) => {
  res.send('Delete a log');
});

module.exports = router;
