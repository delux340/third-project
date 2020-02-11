function getSalt() { return `SELECT salt FROM vacations_data.users where email = ?` }
function searchUsersExists() { return 'select * from users where email = ?' }
function checkLoginParams() { return 'select * from users where email = ? and password = ?' }
function insetUsersQuery() { return "INSERT INTO `vacations_data`.`users` (`email`, `first_name`, `last_name`, `password`,`salt`) VALUES (?,?,?,?,?);" }


module.exports = {
    getSalt,
    searchUsersExists,
    checkLoginParams,
    insetUsersQuery,
}