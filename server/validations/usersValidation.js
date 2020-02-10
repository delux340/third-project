const joi = require("@hapi/joi")

const registerSchema = joi.object({
    email: joi.string().min(5).max(20).regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
    password: joi.string().min(4).max(16).required(),
    firstName: joi.string().required(),
    lastName: joi.string().required()
})

function registerValidation(req, res, next) {
    const { error } = registerSchema.validate(req.body)
    if (error) {
        console.log(error)
        return res.json({ registerRedirect: false, message: "something went wrong" })
    }
    next();
}
const loginSchema = joi.object({
    email: joi.string().min(5).max(20).regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
    password: joi.string().min(4).max(16).required(),

})

function loginValidation(req, res, next) {
    const { error } = loginSchema.validate(req.body)
    if (error) {
        console.log(error)
        return res.json({ message: "not exists", jwtWithoutPassword: "" })
    }
    next();
}


module.exports = { registerValidation, loginValidation }