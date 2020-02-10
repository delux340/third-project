const jwt = require("jsonwebtoken")

function hanldeVerify(token, SECRET) {
    if (!token) verifyFailed()

    const role = jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            verifyFailed()
        } else {
            return verifySuccsess(decoded)
            
        }
    })
    return role
}


module.exports = hanldeVerify

function verifySuccsess(decoded) {
    const { role } = decoded
    return role
}
function verifyFailed() {
    throw new ERROR
}