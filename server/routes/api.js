const express = require('express');
const db = require('../models')
require('mongoose').model('Items');
require('mongoose').model('Troves')
const router = new express.Router();

router.get('/profile', (req, res) => {
  console.log(res.user)
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user

  });
});

router.get('/search/friends/:name', (req, res) => {
  console.log(req.params.name);
  console.log(res)
  db.User.find({ name: { "$regex": req.params.name, "$options": "i" } }).populate({
    path: 'troves',
    populate: {
      path: 'items',
    }
  }).populate('friends').then((user) => {
    return res.json(user)
  })
});

router.get('/user/trove/:id', (req, res) => {
  console.log("small api", req.params)
  db.User.findOne({ _id: req.params.id }).populate({
    path: 'troves',
    populate: {
      path: 'items',
    }
  })
    .then((user) => {
      console.log("REsult", user)
      res.json(user)
    })
})

router.get('/friends/:id', (req, res) => {
  db.User.findOne({ _id: req.params.id }).populate('friends').then((friends) => {
    res.json(friends)
    console.log(friends)
  })
})
module.exports = router;
