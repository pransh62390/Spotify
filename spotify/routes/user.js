const express = require("express");
const router = express.Router();

const {signupPage, signup, loginPage, login} = require("../controller/user");

router.route('/signup').get(signupPage).post(signup);
router.route('/login').get(loginPage).post(login);

module.exports = router;
