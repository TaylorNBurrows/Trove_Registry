const express = require('express');
const validator = require('validator');
const passport = require('passport');
const db = require('../models')
const Troves = require("../models/trove-model");
const Items = require("../models/item-model");
require('mongoose').model('Items');
require('mongoose').model('Troves')
const amazonScraper = require('../scraper/amazonScrapper')
const etsyScraper = require('../scraper/etsyScraper')
const targetScraper = require('../scraper/targetScraper')
const walmartScraper = require('../scraper/walmartScraper')


const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  console.log(payload)
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your username.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';

  } if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your username.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            username: 'This username is already taken.'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

router.put('/friends/:id/:friend', (req, res, next) => {
  console.log(req.params.id, req.params.friend)
  var query = { _id: req.params.id }
  console.log(query)
  var update = { $push: { friends: req.params.friend } }
  var options = { new: true, upsert: true }
  db.User.findOneAndUpdate(query, update, options).populate('friends').then((user) => {
    res.json(user)
  }).catch(err => {
    console.log(err)
  })
});

router.post("/trove/:id", (req, res, next) => {
  console.log("REquest...." + req.body)
  console.log(req.body.body)
  Troves.create(req.body.body)
    .then((data) => {
      db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { troves: data._id } }, { new: true })
        .populate({
          path: 'troves',
          populate: ({
            path: 'items',
          })
        }).then(dbUser => {
          res.json(dbUser);
        })
        .catch(err => {
          console.log(err)
          res.json(err);
        })

    })
});

router.put("/trove/:id", (req, res, next) => {
  console.log("REquest...." + req.body)
  console.log(req.body.body)
  Troves.findOneAndUpdate({ _id: req.params.id }, { $set: req.body.body }, { new: true, upsert: true })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err)
      res.json(err);
    })
});

router.delete('/trove/:id/:userid', (req, res) => {
  console.log("small api, deleted trove id", req.params.id)
  console.log("small api, deleted trove body", req.params.userid)
  db.User.findOneAndUpdate({ _id: req.params.userid }, {$pull: {troves: req.params.id}})
  .then((troves) => {
    res.json(troves)
    console.log(troves)
  })
  Troves.findOneAndDelete({_id: req.params.id}).then((res) =>{console.log(res)})
});

router.post('/trove/item/:troveid', (req, res) => {
  console.log(req.body.body)
  Items.findOneAndUpdate({url: req.body.body.url}, {$set: req.body.body}, {new: true, upsert: true}).then((data)=>{
    console.log(data)
    Troves.findOneAndUpdate({ _id: req.params.troveid }, { $push: { items: data._id} }, { new: true, upsert: true }).then((item) =>{
      res.json(item);
    })
  })
})

module.exports = router;
