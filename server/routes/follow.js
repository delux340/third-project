const router = require("express").Router()
const follow = require("../controllers/follow")

router.post("/", follow)



module.exports = router


