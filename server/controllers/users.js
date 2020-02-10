const { handleLogin, handleRegister } = require("../models/users")


async function login(req, res) {
    const { email, password } = req.body;
    const { jwtWithoutPassword, role } = await handleLogin(email, password);
    try {
        res.status(200).json({ message: "logged in successfully", jwtWithoutPassword, role });
    } catch (err) {
        res.status(404).json({ message: err.message, jwtWithoutPassword: "", role: "" })
    }

}

async function register(req, res) {
    const { email, password, firstName, lastName } = req.body
    await handleRegister(email, password, firstName, lastName)
    try {
        res.status(200).json({ message: "registerd successfuly", registerRedirect: true });
    } catch (err) {
        res.status(404).json({ message: err.message, registerRedirect: false })
    }
}

module.exports = {
    login,
    register
}