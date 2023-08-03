var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills.js')

/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new) //TODO: create new() function in controller and export it to here

router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.create)

router.put('/:id', skillsCtrl.update)

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
