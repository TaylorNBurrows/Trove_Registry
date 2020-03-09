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

router.get('/search/friends', (req, res) => {
  console.log(req.body);
  const name = req.body;
  User.find({ name: { $in: [req.body] } }, (err, user)=>{
    if (err || !user) {
      console.log(err)
      // return res.status(401).end();
    }
    console.log(res.json(user))
  })
})
module.exports = router;
