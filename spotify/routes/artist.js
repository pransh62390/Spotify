const express = require("express");
const router = express.Router();

const {addArtistPage, addArtist, getArtistList} = require("../controller/artist");

router.route('/add_artist').get(addArtistPage).post(addArtist);
router.route('/getArtistList').get(getArtistList);

module.exports = router;
