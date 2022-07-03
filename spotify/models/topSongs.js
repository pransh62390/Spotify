const {config, mysql, query} = require("../db/connect");

const getTopSongs = async (req, res) => {
    let sql = `SELECT s.* 
    FROM song s 
    INNER JOIN (
      SELECT song, AVG(rating) avg_rating
      FROM rating 
      GROUP BY song
    ) r ON r.song = s.id
    ORDER BY r.avg_rating DESC;`;
    const rows = await query(sql);
    return res.json(rows);
};

module.exports = {getTopSongs};
