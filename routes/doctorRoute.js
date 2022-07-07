const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Doctor = require("../models/doctorModel");

router.route("/createDoc").post((req, res) =>{
    const Dfirstname = req.body.Dfirstname;
    const Dlastname = req.body.Dlastname;
    const Docregid = req.body.Docregid;
    const Dnid = req.body.Dnid;
    const Ddateofbirth = req.body.Ddateofbirth;
    const Dphonenumber = req.body.Dphonenumber;
    const hospitalname = req.body.hospitalname;
    const Dgender = req.body.Dgender;
    const Dpassword = req.body.Dpassword;
    const Dconfirmpassword = req.body.Dconfirmpassword;


    bcrypt.hash(Dpassword,12)
                    .then(hashedpassword=>{
                        const newDoctor = new Doctor({
                            Dfirstname,
                            Dlastname,
                            Docregid,
                            Dnid,
                            Ddateofbirth,
                            Dphonenumber,
                            hospitalname,
                            Dgender,
                            Dpassword:hashedpassword,
                            Dconfirmpassword:hashedpassword
                         });
                     
                         newDoctor.save();
                    })

})

module.exports = router;
