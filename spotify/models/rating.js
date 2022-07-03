const {config, mysql, query} = require("../db/connect");

const addrating = async (req, res) => {
    req.body = req.query;
    let {user: user, song: song, rating: rating} = req.body;
    let sql = `INSERT INTO rating(user, song, rating) VALUES ('${user}', '${song}', '${rating}')`;
    const rows = await query(sql);
    return res.json(rows);
};

module.exports = {addrating};
