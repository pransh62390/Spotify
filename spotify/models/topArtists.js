const {config, mysql, query} = require("../db/connect");

const getTopArtists = async (req, res) => {
    let sql = `SELECT a.*, r.avg_rating
    FROM artist a 
    INNER JOIN (
        SELECT *
        FROM song 
    ) s ON s.artists like CONCAT('%', a.id, ',%')
    INNER JOIN (
        SELECT song, AVG(rating) avg_rating
        FROM rating 
        GROUP BY song
    ) r ON r.song = s.id
    GROUP BY a.id
    ORDER BY r.avg_rating DESC;`;
    const rows = await query(sql);
    return res.json(rows);
};

module.exports = {getTopArtists};
