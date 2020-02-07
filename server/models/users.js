const pool = require("../db/pool")
const moment = require("moment")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const logger = require("../utils/logger/logger")
const utils = require("../utils/users/jsonWebToken")


async function register(req, res, next) {
    const { email, password, first_name = null, last_name = null } = req.body
    const [user] = await pool.execute(searchUsersExists(), [email])
    const [first] = user

    if (first) {
        logger.error(`user ${email} has failed to register in ${moment().format("hh:mm:ss")}`)
        res.json({ registerRedirect: false, message: "already exist" })

    } else {
        const encryptPass = bcrypt.hashSync(password, salt)
        await pool.execute(insetUsersQuery(), [email, first_name, last_name, encryptPass, salt])
        logger.info(`user ${email} registerd successfuly in ${moment().format("hh:mm:ss")}`)
        next()
    }
}




async function handleLogin(email, password) {
    const userData = await functionA(email, password)
    if (userData) {
        const { id, role } = userData
        const jwtWithoutPassword = await functionB(id, role, email);
        return { jwtWithoutPassword, role }
    } else {
        failed()

    }
}



module.exports = {
    handleLogin,
    register
}


function searchUsersExists() {
    return 'select * from users where email = ?'
}
function checkLoginParams() {
    return 'select * from users where email = ? and password = ?'
}

function insetUsersQuery() {
    return "INSERT INTO `vacations_data`.`users` (`email`, `first_name`, `last_name`, `password`,`salt`) VALUES (?,?,?,?,?);"
}

function getSalt() {
    return `SELECT salt FROM vacations_data.users where email = ?`
}


async function functionA(email, password) {
    const [result] = await pool.execute(getSalt(), [email])
    const userSalt = result[0].salt
    const encryptPass = bcrypt.hashSync(password, userSalt)
    const [first] = await pool.execute(checkLoginParams(), [email, encryptPass]); // [rows, f]
    const [result] = first
    return result
}
async function functionB(id, role, email) {


    const jwtWithoutPassword = await utils.getJwt({ id, role, password: null });
    logger.info(`user ${email} logged in successfuly in ${moment().format("hh:mm:ss")}`)
    return jwtWithoutPassword

}

function failed(email) {
    const errorMessage = `user ${email} has failed to login ${moment().format("hh:mm:ss")}`;
    logger.error(errorMessage);
    throw new Error(errorMessage);
}