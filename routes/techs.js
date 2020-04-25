const express = require('express');
const router = express.Router();

// @route     GET api/techs
// @desc      Get all techs
router.get('/', (req, res) => {
  res.send('Get all techs');
});

// @route     POST api/techs
// @desc      Add new log
router.post('/', (req, res) => {
  res.send('Add new tech');
});

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
