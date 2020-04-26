const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName } = req.body;

    try {
      // Search in db
      let tech = await Tech.findOne({ firstName, lastName });

      // If exist return 400, bad request w/ message
      if (tech) {
        return res.status(400).json({ msg: 'Tech already exists!' });
      }

      // Otherwise create a new one
      tech = new Tech({
        firstName,
        lastName,
      });

      // and save in db
      await tech.save();
      res.send('Tech saved!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     DELETE api/techs/:id
// @desc      Delete tech
router.delete('/:id', (req, res) => {
  res.send('Delete a tech');
});

// Tech update is not necessary
// @route     PUT api/techs/:id
// @desc      Update tech
// router.put('/:id', (req, res) => {
//   res.send('Update a tech');
// });

module.exports = router;
