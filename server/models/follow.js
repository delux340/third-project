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





const addFollow = () => {
    return "INSERT INTO `vacations_data`.`vacations_followers` (`user_id`, `vacation_id`) VALUES (?, ?);"

}

const removeFollow = () => {
    return "DELETE FROM `vacations_data`.`vacations_followers` WHERE (`user_id` = ?) and (`vacation_id` = ?) ;"
}

const getAllVacations = () => {
    return `SELECT 
    vacations.*,
    (SELECT 
            COUNT(vacation_id)
        FROM
            vacations_data.vacations_followers
        WHERE
            vacations_followers.vacation_id = vacations.id) AS followers_count,
    CASE
        WHEN
            EXISTS( SELECT 
                    1
                FROM
                    vacations_followers
                WHERE
                    vacations_followers.vacation_id = vacations.id
                        AND vacations_followers.user_id = ?)
        THEN
            1
        ELSE 0
    END AS is_following
FROM
    vacations`
}

