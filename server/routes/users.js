const router = require("express").Router()
const validations = require("../validations/usersValidation")
const { register } = require("../models/users")
const { login } = require("../controllers/users")



router.post("/register", validations.registerValidation, register, (req, res) => {
    res.json({ registerRedirect: true, message: "logged in successfuly" })
})

router.post("/login", validations.loginValidation, login)






module.exports = router



