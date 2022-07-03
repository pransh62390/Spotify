const express = require("express");
const router = express.Router();

const {getTopArtists} = require("../controller/topArtists");

router.route('/top_artists').get(getTopArtists);

module.exports = router;
