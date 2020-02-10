const router = require("express").Router()
const validations = require("../validations/usersValidation")
const { login, register } = require("../controllers/users")



router.post("/register", validations.registerValidation, register)
router.post("/login", validations.loginValidation, login)


module.exports = router



