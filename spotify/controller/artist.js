const path = require("path");
const {addArtist, getArtistList} = require("../models/artist");

const addArtistPage = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../view/add_artist.html"));
};

module.exports = {addArtist, addArtistPage, getArtistList};
