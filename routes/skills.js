var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills.js')

/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.getOne);

module.exports = router;
