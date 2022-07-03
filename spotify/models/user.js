const {config, mysql, query} = require("../db/connect");

const signup = async (req, res)=> {
    let sql = `insert into users (email, password, phone, user_id) values ('${req.body.email}', '${req.body.password}', '${req.body.mobile}', '')`;
    const rows = await query(sql);
    console.log(rows);
    res.send("Data inserted successfully");
};

const login = async (req, res) => {
    let params = {email: req.body.email, password: req.body.password};
    let sql = `select password from users where email='${params.email}'`;
    const rows = await query(sql);
    if(rows.length == 0) {
        res.send("check your email id...");
        return;
    }
    if(params.password === rows[0].password) {
        res.send("You are logged in..")
        return;
    } else {
        res.send("Invalid password...");
        return;
    }
};

module.exports = {signup, login};
