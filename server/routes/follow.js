const express = require("express")
const router = express.Router()
const pool = require("../db/pool")
const moment = require("moment")


router.post("/", (req, res) => {
    const { vacation_id, isFollowed } = req.body
    const { id } = req.user_details
    if(isFollowed){
        addFollow
    }else{
        removeFollow
    }

})










module.exports = router


const addFollow = () => {

}

const removeFollow = () => {

}