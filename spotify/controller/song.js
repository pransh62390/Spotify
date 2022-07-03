const path = require("path");
const {addSong} = require("../models/song");

const addSongPage = async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../view/add_song.html"));
};


module.exports = {addSongPage, addSong};
