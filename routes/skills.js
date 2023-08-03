var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills.js')

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.create)

router.put('/:id', skillsCtrl.update)

router.delete('/:id', skillsCtrl.delete);

module.exports = router;
