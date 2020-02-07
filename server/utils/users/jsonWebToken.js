const jwt = require("jsonwebtoken")

function getJwt(user) {
    return new Promise(function (resolve, reject) {
        jwt.sign(
            user
            , process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) {
                    reject("err")
                    return
                } else {
                    resolve(token)
                }
            })

    })
}
module.exports = { getJwt }