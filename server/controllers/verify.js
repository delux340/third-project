const handleVerify = require("../models/verify")

async function verify(req, res) {
    const { token } = req.headers
    const { SECRET } = process.env
    try {
        const role = await handleVerify(token, SECRET)
        res.status(200).json({ message: "verified", role, status: true })
    } catch (err) {
        res.status(418).json({ message: err.message })
    }
}

module.exports = verify