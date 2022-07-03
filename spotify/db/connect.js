const mysql = require('mysql2/promise');

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "spotify"
};

// Sql query middleware
async function query(sql, params) {
    const connection = await mysql.createConnection(config);
    const [results, ] = await connection.execute(sql, params);
    return results;
};

module.exports = {config, mysql, query};
