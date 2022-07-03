const express = require("express");
const router = express.Router();
const path = require("path");

const {addSongPage, addSong} = require("../controller/song");

const multer = require('multer');

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './upload'); 
    },
    filename: (req, file, callBack) => {
        const filename = file.fieldname + '-' + file.originalname.replace(" ", "_");
        console.log(file);
        callBack(null, filename);
    }
});

var upload = multer({
    storage: storage,
});

router.route('/add_song').get(addSongPage);
router.route('/addSong').post(upload.single('cover_img'), addSong);

module.exports = router;
