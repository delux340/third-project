const pool = require("../db/pool")
const moment = require("moment")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const logger = require("../utils/logger/logger")
const utils = require("../utils/users/jsonWebToken")


async function handleRegister(email, password, first_name, last_name) {
    const first = await ifUserExists(email)
    if (first) {
        registerFail(email)
    } else {
        registerSucssess(password, salt, email, first_name, last_name)
    }
}

async function handleLogin(email, password) {
    const userData = await getLoginParams(email, password)
    if (userData) {
        return loginSuccess(userData, email)
    } else {
        loginFailed()
    }
}



module.exports = {
    handleLogin,
    handleRegister
}



async function getLoginParams(email, password) {
    const [saltResult] = await pool.execute(getSalt(), [email])
    const userSalt = saltResult[0].salt

    const encryptPass = bcrypt.hashSync(password, userSalt)
    const [first] = await pool.execute(checkLoginParams(), [email, encryptPass]); // [rows, f]
    const [result] = first
    return result
}
async function getToken(id, role, email) {
    const jwtWithoutPassword = await utils.getJwt({ id, role, password: null });
    logger.info(`user ${email} logged in successfuly in ${moment().format("hh:mm:ss")}`)
    return jwtWithoutPassword

}

function loginFailed(email) {
    const errorMessage = `user ${email} has failed to login ${moment().format("hh:mm:ss")}`;
    logger.error(errorMessage);
    throw new Error(errorMessage);
}

async function ifUserExists(email) {
    const [user] = await pool.execute(searchUsersExists(), [email])
    const [first] = user
    return first
}

function registerFail(email) {
    const errorMessage = `user ${email} has failed to register ${moment().format("hh:mm:ss")}`;
    logger.error(errorMessage)
    throw new Error(errorMessage);
}

async function registerSucssess(password, salt, email, first_name, last_name) {
    const encryptPass = bcrypt.hashSync(password, salt)
    await pool.execute(insetUsersQuery(), [email, first_name, last_name, encryptPass, salt])
    logger.info(`user ${email} registerd successfuly in ${moment().format("hh:mm:ss")}`)
    return
}

async function loginSuccess(userData, email) {
    const { id, role } = userData
    const jwtWithoutPassword = await getToken(id, role, email);
    return { jwtWithoutPassword, role }
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
