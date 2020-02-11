const handleVerify = require("../models/verify")

async function verify(req, res) {
    const { token } = req.headers
    const { SECRET } = process.env
    const role = await handleVerify(token, SECRET)
    try {
        res.status(200).json({ status: true, role })
    } catch (err) {
        res.status(404).json({ status: false, role: "" })
    }
}

module.exports = verify