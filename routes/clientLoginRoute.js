const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Client = require("../models/clientModel");

router.route("/clientLogin").post((req, res) =>{
    const hid = req.body.hid;
    const password = req.body.password;

    Client.findOne({hid: hid}, (err,user) => {
        if(user){

            bcrypt.compare(password,user.password)
            .then(passMatch=>{
                
                if(passMatch){
                    res.send({message: "logindone", user: user})
                }
    
                else{
                    res.send({message: "passwordisIncorrect"}) 
                }
            })

        }
        else{
            res.send({message: "userDoesNotExist"})
        }
    })

})

module.exports = router;