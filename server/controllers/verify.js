const handleVerify = require("../models/verify")

function verify(req, res) {
    const { token } = req.headers
    const { SECRET } = process.env
  
    const role = handleVerify(token, SECRET)
    console.log(role)
    try {
        res.json({ status: true, role })
    }
    catch (err) {
        res.status(404).json({ status: false, role: "" })
    }
}

module.exports = verify