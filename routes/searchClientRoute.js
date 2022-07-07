const express = require("express");
const router = express.Router();
const Client = require("../models/clientModel");

router.route("/searchClient").post((req, res) =>{
    
    const hid = req.body.hid;

    Client.findOne({hid: hid}, (err,user) => {
        if(user){

            res.send({message: "userExist", user: user})
        }
        else{
            res.send({message: "userDoesNotExist"})
        }
    })

})

module.exports = router;