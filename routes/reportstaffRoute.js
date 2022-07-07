const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Reportstaff = require("../models/reportstaffModel");

router.route("/create3").post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const Rregid = req.body.Rregid;
    const nid = req.body.nid;
    const dateofbirth = req.body.dateofbirth;
    const phonenumber = req.body.phonenumber;
    const hospitalname = req.body.hospitalname;
    const gender = req.body.gender;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;


    bcrypt.hash(password,12)
                    .then(hashedpassword=>{
                        const newReportstaff = new Reportstaff({
                            firstname,
                            lastname,
                            Rregid,
                            nid,
                            dateofbirth,
                            phonenumber,
                            hospitalname,
                            gender,
                            password:hashedpassword,
                            confirmpassword:hashedpassword
                         });
                     
                         newReportstaff.save();
                    })

})

module.exports = router;
