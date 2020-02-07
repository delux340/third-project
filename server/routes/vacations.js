const router = require("express").Router()
const pool = require("../db/pool")


router.get("/", async (req, res) => {
    const { id, role } = req.user_details
    const [result] = await pool.execute(getAllVacations(), [id])
    res.json(result)


})

router.post("/add", async (req, res) => {
    const { description, destination, image, from, until, price } = req.body
    await pool.execute(AddVacation(), [description, destination, image, from, until, price])
})

router.post("/edit", async (req, res) => {
    const { description, destination, image, from, until, price, id: vacationId } = req.body
    const { id } = req.user_details
    await pool.execute(editVacation(), [description, destination, image, from, until, price, vacationId])
    const [result] = await pool.execute(getAllVacations(), [id])
    res.json(result)

})



router.post("/remove", async (req, res) => {
    const { vacationId } = req.body
    const { id } = req.user_details
    await pool.execute(removeVacation(), [vacationId])
    const [result] = await pool.execute(getAllVacations(), [id])
    console.log(result)
    res.json(result)
})

router.get("/followers", async (req, res) => {
    const [result] = await pool.execute(getVacationsFollowers())
    res.json(result)
})


module.exports = router



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