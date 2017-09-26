var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/userid/:id', function (req, res) {
  const id = Number(req.params.id)
  const connection = req.app.get('connection')
  db.getUser(id, connection)
    .then(user => {

      res.render('userid', user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR' + err.message)
    })
})

module.exports = router
