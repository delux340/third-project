const pool = require("../db/pool")
const queries = require("../queries/follow")

async function handleFollow(isFollowed, vacation_id, id) {
    if (isFollowed) {
        await followSuccess(id, vacation_id)
    } else {
        await followFailed(id, vacation_id)
    }
    const [result] = await pool.execute(queries.getAllVacations(), [id])
    return result
}

async function followSuccess(id, vacation_id) {
    await pool.execute(queries.addFollow(), [id, vacation_id])

}
async function followFailed(id, vacation_id) {
    await pool.execute(queries.removeFollow(), [id, vacation_id])

}

module.exports = handleFollow




