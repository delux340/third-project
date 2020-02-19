const { handleVacation, handleAdd, handleEdit, handleRemove, handleFollowers } = require("../models/vacations")


async function vacations(req, res) {
    const { id } = req.user_details
    const result = await handleVacation(id)
    res.json(result)
}

async function add(req, res) {
    const { description, destination, image, from, until, price } = req.body
    handleAdd(description, destination, image, from, until, price)
}
async function edit(req, res) {
    const { description, destination, image, from, until, price, id: vacationId } = req.body
    const { id } = req.user_details
    const result = await handleEdit(description, destination, image, from, until, price, vacationId, id)
    res.json(result)
}
async function remove(req, res) {
    const { vacationId } = req.body
    const { id } = req.user_details
    const result = await handleRemove(vacationId, id)
    res.json(result)
}
async function followers(req, res) {
    const result = await handleFollowers()
    res.json(result)
}


module.exports = { vacations, add, edit, remove, followers }