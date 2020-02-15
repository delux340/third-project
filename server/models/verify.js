const jwt = require("jsonwebtoken")

async function hanldeVerify(token, SECRET) {
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


function verifySuccsess(decoded) {
    const { role } = decoded
    return role
}
function verifyFailed() {
    const errorMessage = "something has gone wrong"
    throw new Error(errorMessage)
}
module.exports = hanldeVerify