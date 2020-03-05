//const User = require('mongoose').model('User');
const db = require('../models')
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  nameField: 'name',
  emailField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (username, name, email, password, done) => {
  const userData = {
    username: username.trim(),
    name: name.trim(),
    email: email.trim(),
    password: password.trim()
  };

  const newUser = new db.User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});