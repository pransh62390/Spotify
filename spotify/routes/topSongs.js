const express = require("express");
const router = express.Router();

const {getTopSongs} = require("../controller/topSongs");

router.route('/top_songs').get(getTopSongs);

module.exports = router;
