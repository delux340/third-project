const router = require("express").Router()
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    const { token } = req.headers
    const { SECRET } = process.env

    if (!token) return res.json({ status: false, role: "" })

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            res.json({ status: false, role: "" })
        } else {
            const { role } = decoded
            res.json({ status: true, role })
        }
    })
})

module.exports = router
