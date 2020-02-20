const { handleLogin, handleRegister } = require("../models/users")




async function register(req, res) {
    const { email, password, firstName, lastName } = req.body
    try {
        await handleRegister(email, password, firstName, lastName)
        res.status(200).json({ message: "registerd successfuly", registerRedirect: true });
    } catch (err) {
        res.status(404).json({ message: "user already exists", registerRedirect: false })
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const { jwtWithoutPassword, role, first_name } = await handleLogin(email, password);
        res.status(200).json({ message: "logged in successfully", jwtWithoutPassword, role, first_name });
    } catch (err) {
        res.status(404).json({ message: "email or password are incorrect", jwtWithoutPassword: "", role: "", firstName: "g" })
    }

}



module.exports = {
    login,
    register
}