const router = require("express").Router()
const { vacations, add, edit, remove,followers } = require("../controllers/vacations")

router.get("/", vacations)
router.post("/add", add)
router.put("/edit", edit)
router.delete("/remove", remove)
router.get("/followers", followers)


module.exports = router



