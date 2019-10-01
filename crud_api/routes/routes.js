var express = require('express')
var router = express.Router();

const  config = require('../config');
const fav = require('./').fav;

// define the home page route

// FAV APIs
router.post('/', fav.addFav);
router.get('/', fav.getFav);
router.put('/', fav.updateFav);
router.delete('/:id', fav.deleteFav);

module.exports = router