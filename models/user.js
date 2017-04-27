const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true, unique: true},
  password: {type: String, required: true, trim: true},
  image: {type: String, trim: true, default: 'http://www.fillmurray.com/284/196'},
  favEvents: [{tmId: {type: String, unique: true}}],
  favVenues: [{tmId: {type: String, unique: true}}],
  favArtists: [{tmId: {type: String, unique: true}}],
  friends: [{type: mongoose.Schema.ObjectId, ref: 'User', unique: true}]
});

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema
  .virtual('passwordConf')
  .set(function setPasswordConf(passwordConf) {
    this._passwordConf = passwordConf;
  });

userSchema.pre('validate', function checkPassword(next) {
  if (this.isModified('password') && this._passwordConf !== this.password) this.invalidate('passwordConf', 'does not match');
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
