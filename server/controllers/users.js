const { handleLogin } = require("../models/users")


async function login(req, res) {
    const { email, password } = req.body;
    const { jwtWithoutPassword, role } = await handleLogin(email, password);
    try {
        res.status(200).json({ message: "logged in successfully", jwtWithoutPassword, role });
    } catch (err) {
        res.status(404).json({ message: err.message, jwtWithoutPassword: "", role: "" })
    }

}



module.exports = {
    login
}