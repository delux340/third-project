const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const vacations = require("./routes/vacations")
const users = require("./routes/users")
const VaildateToken = require("./validations/tokenValidations")
const verify = require("./routes/verify")
const follow = require("./routes/follow")
require("dotenv").config()

app.listen(process.env.PORT || 5000, () => console.log(`now listening to port ${process.env.PORT}`))
app.use(bodyParser.json())
app.use(cors())

app.use("/users", users)
app.use("/verify", verify)
app.use(VaildateToken)
app.use("/vacations", vacations)
app.use("/follow", follow)
