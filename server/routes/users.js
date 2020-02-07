const router = require("express").Router()
const validations = require("../validations/usersValidation")
const { login, register } = require("../models/users")




router.post("/register", validations.registerValidation, register, (req, res) => {
    res.json({ registerRedirect: true, message: "logged in successfuly" })
})

router.post("/login", validations.loginValidation, login, (req, res) => {
    const { jwtWithoutPassword } = req.token
    const { role } = req.role
    res.json({ message: "logged in successfully", jwtWithoutPassword, role })
})






module.exports = router



