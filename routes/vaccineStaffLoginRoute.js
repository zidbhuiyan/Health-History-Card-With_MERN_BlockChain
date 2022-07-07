const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Vaccinestaff = require("../models/vaccinestaffModel");

router.route("/vaccineStaffLogin").post((req, res) =>{

    const Vregid = req.body.Vregid;
    const password = req.body.password;

    Vaccinestaff.findOne({Vregid: Vregid}, (err,user) => {
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