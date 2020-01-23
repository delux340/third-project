const express = require("express")
const router = express.Router()
const pool = require("../db/pool")

// const logger = require("../utils/logger/logger")

router.get("/", async (req, res) => {
    const { id, role } = req.user_details
    const [result] = await pool.execute(getAllVacations())
    res.json(result)


})






module.exports = router



const getAllVacations = () => {
    return `select * from vacations`
}
