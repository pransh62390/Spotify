const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

require("dotenv").config();
const user = require("./routes/user");
const artist = require("./routes/artist");
const song = require('./routes/song');
const rating = require("./routes/rating");
const topSongs = require("./routes/topSongs");
const topArtists = require("./routes/topArtists");

const {config, mysql} = require("./db/connect");

// middleware
app.use(cors());
app.use('/app', express.static(path.join(__dirname, "/view")));
app.use('/app', express.static(path.join(__dirname, "/upload")));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/app/upload', express.static('upload'));

// routes
app.use('/app', user);
app.use('/app', artist);
app.use('/app', song);
app.use('/app', rating);
app.use('/app', topSongs);
app.use("/app", topArtists);
app.use("/app/index", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, './view/404.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Server is running on port ${port}`));
