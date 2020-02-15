const pool = require("../db/pool")
const queries = require("../queries/vacations")


async function handleVacation(id) {
    const [result] = await pool.execute(queries.getAllVacations(), [id])
    return result
}
async function handleAdd(description, destination, image, from, until, price) {
    await pool.execute(queries.AddVacation(), [description, destination, image, from, until, price])
}
async function handleEdit(description, destination, image, from, until, price, vacationId, id) {

    await pool.execute(queries.editVacation(), [description, destination, image, from, until, price, vacationId])
    const [result] = await pool.execute(queries.getAllVacations(), [id])
    return result
}

async function handleRemove(vacationId, id) {
    await pool.execute(queries.removeVacation(), [vacationId])
    const [result] = await pool.execute(queries.getAllVacations(), [id])
    return result
}


async function handleFollowers() {
    const [result] = await pool.execute(queries.getVacationsFollowers())
    return result
}

module.exports = { handleVacation, handleAdd, handleEdit, handleRemove, handleFollowers }



























