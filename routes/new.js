var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/entries/new', entriesController.newUpload);
router.post('/entries/new', entriesController.newUpload);


module.exports = router;
