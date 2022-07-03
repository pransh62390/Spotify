const {config, mysql, query} = require("../db/connect");
const path = require("path");


const addSong = async (req, res) => {
    console.log(req.body);
    let {name: name, rls_date: rls_date, artists_list: artists_list} = req.body;
    const file = req.file;

    if(!artists_list) {
        return;
    }
    let artists = "";
    let artistsNames = "";
    for(let i=0; i<artists_list.length; i++) {
        let artistObj = JSON.parse(artists_list[i]);
        let s = artistObj.id;
        if(s.length == 0){
            continue;
        }
        artists += s + ", ";
        artistsNames += artistObj.name + ", ";
    }
    const filename = file.fieldname + '-' + file.originalname.replace(" ", "_");
    var imgsrc = 'http://localhost:8080/app/upload/' + filename;
    let sql = `INSERT INTO song(name, rls_date, cover_img, artists, id, artistsNames) VALUES ('${name}', '${rls_date}', '${imgsrc}', '${artists}', '', '${artistsNames}')`;
    const rows = await query(sql);
    res.send("Song Added Successfully...");
};

module.exports = {addSong};
