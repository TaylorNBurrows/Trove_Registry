const express = require('express');
const User = require('mongoose').model('User');
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
  User.find({ name: { "$regex": req.params.name, "$options": "i" } }, (err, user) => {
    console.log(user)
    res.status(200).json(user)
  })
});
module.exports = router;
