
const getAllVacations = () => {
    return `SELECT 
    vacations.*,
    (SELECT COUNT(vacation_id) FROM vacations_data.vacations_followers WHERE vacations_followers.vacation_id = vacations.id) AS followers_count,
    CASE WHEN EXISTS( SELECT 1 FROM vacations_followers WHERE vacations_followers.vacation_id = vacations.id AND vacations_followers.user_id = ?) THEN 1
     ELSE 0 END AS is_following FROM vacations`
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
vacations.*,(SELECT COUNT(vacation_id) FROM vacations_data.vacations_followers WHERE vacations_followers.vacation_id = vacations.id) AS followers_count,
CASE WHEN EXISTS( SELECT 1 FROM vacations_followers WHERE vacations_followers.vacation_id = vacations.id) THEN 1 ELSE 0 END AS is_following FROM vacations`
}


module.exports = {
    getAllVacations,
    AddVacation,
    editVacation,
    removeVacation,
    getVacationsFollowers
}