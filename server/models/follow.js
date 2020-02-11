const pool = require("../db/pool")


async function handleFollow(isFollowed, vacation_id, id) {
    if (isFollowed) {
       await followSuccess(id, vacation_id)
    } else {
       await followFailed(id, vacation_id)
    }
    const [result] = await pool.execute(getAllVacations(), [id])
    return result
}




module.exports = handleFollow

async function followSuccess(id, vacation_id) {
    await pool.execute(addFollow(), [id, vacation_id])

}
async function followFailed(id, vacation_id) {
    await pool.execute(removeFollow(), [id, vacation_id])

}





