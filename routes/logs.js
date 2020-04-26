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
router.post(
  '/',
  [
    check('message', 'Message is required').not().isEmpty(),
    check('tech', 'Tech is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message, attention, tech } = req.body;

    try {
      const newLog = new Log({
        message,
        attention,
        tech,
      });

      const log = await newLog.save();
      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/logs/:id
// @desc      Update log
router.put('/:id', async (req, res) => {
  const { message, attention, tech } = req.body;

  // Build log obj
  const logFields = {};
  if (message) logFields.message = message;
  if (attention) logFields.attention = attention;
  if (tech) logFields.tech = tech;

  try {
    let log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ msg: 'Log not found' });
    }

    log = await Log.findByIdAndUpdate(
      req.params.id,
      { $set: logFields },
      { new: true }
    );

    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/logs/:id
// @desc      Delete log
router.delete('/:id', async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ msg: 'Log not found' });
    }

    await Log.findOneAndRemove(req.params.id);

    res.json({ msg: 'Log removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
