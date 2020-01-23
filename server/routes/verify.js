const router = require("express").Router()
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    const { token } = req.headers
    const { SECRET } = process.env
    jwt.verify(token, SECRET, (err, decoded) => {
        // const { role } = decoded
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
})

module.exports= router