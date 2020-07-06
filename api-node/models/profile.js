const Joi = require('joi');
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

function validateProfile(profile) {
  const Schema = {
    name: Joi.string().min(5).max(50).required(),
  };
  return Joi.validate(profile, Schema);
}

exports.Profile = Profile;
exports.validate = validateProfile;
