let express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.json({message: 'hi'})
})

module.exports = router
