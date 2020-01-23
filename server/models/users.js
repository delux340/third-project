const pool = require("../db/pool")
const express = require("express")
const moment = require("moment")
const bcrypt = require("bcryptjs")
const salt = "$2a$10$B4/8kcoC.ykIGgz4yhlj/u"
const logger = require("../utils/logger/logger")
const validations = require("../validations/usersValidation")
const utils = require("../utils/users/jsonWebToken")
const jwt = require('jsonwebtoken')


async function register(req, res, next) {
    const { email, password, first_name = null, last_name = null } = req.body
    const [user] = await pool.execute(searchUsersExists(), [email])
    const [first] = user
    if (first) {
        logger.error(`user ${email} has failed to register in ${moment().format("hh:mm:ss")}`)
        res.json({ registerRedirect: false, message: "already exist" })

    } else {
        const encryptPass = bcrypt.hashSync(password, salt)
        await pool.execute(insetUsersQuery(), [email, first_name, last_name, encryptPass])
        logger.info(`user ${email} registerd successfuly in ${moment().format("hh:mm:ss")}`)
        next()
    }
}




async function login(req, res, next) {
    const { email, password } = req.body
    const encryptPass = bcrypt.hashSync(password, salt)
    const [user] = await pool.execute(checkLoginParams(), [email, encryptPass])
    const [first] = user

    if (first) {
        const { id, role } = first
        const jwtWithoutPassword = await utils.getJwt({ id, role, password: null })
        logger.info(`user ${email} logged in successfuly in ${moment().format("hh:mm:ss")}`)
        req.token = { jwtWithoutPassword }
        next()
    } else {
        logger.info(`user ${email} has failed to login ${moment().format("hh:mm:ss")}`)
        res.json({ message: "not exists", jwtWithoutPassword: "" })
    }
}



module.exports = {
    login,
    register
}


function searchUsersExists() {
    return 'select * from users where email = ?'
}
function checkLoginParams() {
    return 'select * from users where email = ? and password = ?'
}

function insetUsersQuery() {
    return "INSERT INTO `vacations_data`.`users` (`email`, `first_name`, `last_name`, `password`) VALUES (?,?,?,?);"
}
