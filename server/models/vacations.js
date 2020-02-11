const pool = require("../db/pool")

async function handleVacation(id) {
    const [result] = await pool.execute(getAllVacations(), [id])
    return result
}
async function handleAdd(description, destination, image, from, until, price) {
    await pool.execute(AddVacation(), [description, destination, image, from, until, price])
}
async function handleEdit(description, destination, image, from, until, price, vacationId, id) {

    await pool.execute(editVacation(), [description, destination, image, from, until, price, vacationId])
    const [result] = await pool.execute(getAllVacations(), [id])
    return result
}

async function handleRemove(vacationId, id) {
    await pool.execute(removeVacation(), [vacationId])
    const [result] = await pool.execute(getAllVacations(), [id])
    return result
}


async function handleFollowers() {
    const [result] = await pool.execute(getVacationsFollowers())
    return result
}

module.exports = { handleVacation, handleAdd, handleEdit, handleRemove, handleFollowers }




























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

const AddVacation = () => {
    return "INSERT INTO `vacations_data`.`vacations` (`description`, `destination`, `image`, `from`, `until`, `price`) VALUES (?,?,?,?,?,?);"

}

const editVacation = () => {
    return "UPDATE `vacations_data`.`vacations` SET `description` = ?, `destination` = ?, `image` = ?, `from` = ?, `until` = ?, `price` = ? WHERE (`id` = ?);"

}

const removeVacation = () => {
    return "DELETE FROM `vacations_data`.`vacations` WHERE (`id` = ?);"
}


const getVacationsFollowers = () => {
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
                vacations_followers.vacation_id = vacations.id)
    THEN
        1
    ELSE 0
END AS is_following
FROM
vacations`
}