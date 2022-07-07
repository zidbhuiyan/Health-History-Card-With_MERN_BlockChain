const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Reportstaff = require("../models/reportstaffModel");

router.route("/reportStaffLogin").post((req, res) =>{

    const Rregid = req.body.Rregid;
    const password = req.body.password;

    Reportstaff.findOne({Rregid: Rregid}, (err,user) => {
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