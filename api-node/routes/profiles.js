const express = require('express');
const { Profile, validate } = require('../models/profile');
const router = express.Router();

router.get('/', async (req, res) => {
  const profiles = await Profile.find();
  res.send(profiles);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let profile = new Profile({ name: req.body.name });
  profile = await profile.save();

  res.send(profile);
});

module.exports = router;
