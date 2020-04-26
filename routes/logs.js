const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Tech = require('../models/Tech');
const Log = require('../models/Log');

// @route     GET api/logs
// @desc      Get all logs
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    console.error('Get logs: ', err.message);
    res.status(500).send('Server Error');
  }
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
