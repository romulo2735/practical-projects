let express = require('express');
let router = express.Router();
let User = require('../src/Models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
  let dataUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    accounts: [{
      name: req.body.account_name,
      role: 'owner',
      enable: true,
    }]
  }

  let callback = (err, User) => {
    if (err) {
      return res.status(422).json({
        err: err
      });
    }
    return res.status(200).json({
      user: User
    });
  }

  User.create(dataUser, callback);

});

module.exports = router;