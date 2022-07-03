const express = require("express");
const router = express.Router();

const {addrating} = require("../controller/rating");

router.route('/add_rating').get(addrating);

module.exports = router;
