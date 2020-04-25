const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const Tech = require('../models/Tech');

// @route     GET api/techs
// @desc      Get all techs
router.get('/', (req, res) => {
  res.send('Get all techs');
});

// @route     POST api/techs
// @desc      Add new tech
router.post(
  '/',
  [
    check('firstName', 'Name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

// @route     PUT api/techs/:id
// @desc      Update tech
router.put('/:id', (req, res) => {
  res.send('Update a tech');
});

// @route     DELETE api/techs/:id
// @desc      Delete tech
router.delete('/:id', (req, res) => {
  res.send('Delete a tech');
});

module.exports = router;
