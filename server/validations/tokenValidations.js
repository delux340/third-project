const jwt = require("jsonwebtoken")

function VaildateToken(req, res, next) {
    const { token } = req.headers
    const { SECRET } = process.env
    jwt.verify(token, SECRET, async (err, decoded) => {
        if (err) {
            console.log(err)
            res.json({ message: "token is not valid" })
        } else {
            const { id, role } = await decoded
            req.user_details = { id, role }
            next()
        }
    })

}
module.exports = VaildateToken 