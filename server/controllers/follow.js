const handleFollow = require("../models/follow")


async function follow(req, res) {
    const { vacation_id, isFollowed, } = req.body
    const { id } = req.user_details
    const result = await handleFollow(isFollowed, vacation_id, id)
    res.json(result)
}





module.exports = follow