const express = require("express")
const router = express.Router()
const validations = require("../validations/usersValidation")
const { login, register } = require("../models/users")

// to change salt


router.post("/register", validations.registerValidation, register, (req, res) => {
    res.json({ registerRedirect: true, message: "logged in successfuly" })
})

router.post("/login", validations.loginValidation, login, (req, res) => {
    const { jwtWithoutPassword } = req.token
    res.json({ message: "logged in successfully", jwtWithoutPassword })
})






module.exports = router



