const {config, mysql, query} = require("../db/connect");

const addArtist = async (req, res) => {
    let {name: name, dob: dob, bio: bio} = req.body;
    let sql = `INSERT INTO artist(name, dob, bio, id) VALUES ('${name}', '${dob}', '${bio}', '')`;
    const rows = await query(sql);
    res.send("Artist Added Successfully...");
};

const getArtistList = async (req, res) => {
    let sql = `select name, id from artist`;
    const rows = await query(sql);
    return res.json(rows);
};

module.exports = {addArtist, getArtistList};
