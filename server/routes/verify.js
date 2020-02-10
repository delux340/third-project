const router = require("express").Router()
const verify= require("../controllers/verify")

router.get("/", verify)
   

module.exports = router
