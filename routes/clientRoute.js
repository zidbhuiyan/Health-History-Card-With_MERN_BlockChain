const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Client = require("../models/clientModel");

router.route("/create1").post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birthid = req.body.birthid;
    const nid = req.body.nid;
    const hid = req.body.hid;
    const email = req.body.email;
    const bloodgroup = req.body.bloodgroup;
    const dateofbirth = req.body.dateofbirth;
    const phonenumber = req.body.phonenumber;
    const fathersname = req.body.fathersname;
    const fathersnid = req.body.fathersnid;
    const mothersname = req.body.mothersname;
    const mothersnid = req.body.mothersnid;
    const presentaddress = req.body.presentaddress;
    const permanentaddress = req.body.permanentaddress;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    const gender = req.body.gender;
    const emergphonenumber = req.body.emergphonenumber;


    Client.findOne({birthid: birthid} , (err,newClient) => {

        if(newClient){
            res.send({message: "userBidExist"})
        }
        else{
            
            Client.findOne({nid: nid} , (err,newClient)=>{
                if(newClient){
                    res.send({message: "userNidExist"})
                }
                else{

                    bcrypt.hash(password,12)
                    .then(hashedpassword=>{


                        const newClient = new Client({
                            firstname,
                            lastname,
                            birthid,
                            nid,
                            hid,
                            email,
                            bloodgroup,
                            dateofbirth,
                            phonenumber,
                            fathersname,
                            fathersnid,
                            mothersname,
                            mothersnid,
                            presentaddress,
                            permanentaddress,
                            password:hashedpassword,
                            confirmpassword:hashedpassword,
                            gender,
                            emergphonenumber
                         }); 
            
                newClient.save(err =>{
                    if(err){
                        res.send(err)
                    } else{
                        res.send({message: "regDone"})
                    }
                })
                    })
                }
            })
        }

    })

})

router.route("/updateEmail").post((req, res) =>{

    const hid = req.body.hid;
    const email = req.body.email;

    Client.updateOne({hid},{
        $set:{
            email,
        }
    }, (err,newEmail)=>{
        if(err){
            res.send(err)
        }
        else{
            Client.findOne({hid: hid}, (err,user) => {
                res.send({message: "updateEmailDone", user: user})
            })
        }
    })

})

router.route("/updatePhoneNumber").post((req, res) =>{

    const hid = req.body.hid;
    const phonenumber = req.body.phonenumber;

    Client.updateOne({hid},{
        $set:{
            phonenumber,
        }
    }, (err,newPhonenumber)=>{
        if(err){
            res.send(err)
        }
        else{
            Client.findOne({hid: hid}, (err,user) => {
                res.send({message: "updatePhoneDone", user: user})
            })
        }
    })

})

router.route("/updatePassword").post((req, res) =>{

    const hid = req.body.hid;
    const password = req.body.password;
    const newpassword = req.body.newpassword;

    console.log(password);
    console.log(newpassword);

    Client.findOne({hid: hid}, (err,user) => {
        if(user){
            bcrypt.compare(password,user.password)
            .then(passMatch=>{
                
                if(passMatch){

                    bcrypt.hash(newpassword,12)
                    .then(hashedpassword=>{
                        console.log(hashedpassword);

                        Client.updateOne({hid},{
                            $set:{
                                password:hashedpassword,
                                confirmpassword: hashedpassword,
                            }
                        }, (err,newPassword)=>{
                            if(err){
                                res.send(err)
                            }
                            else{
                                res.send({message: "passwordisChanged"}) 
                            }
                        })
                    })
                    
                }
    
                else{
                    res.send({message: "passwordisIncorrect"}) 
                }
            })
        }
    })

})

module.exports = router;