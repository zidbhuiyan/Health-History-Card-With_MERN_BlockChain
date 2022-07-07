const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

router.route("/create").post((req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const newContact = new Contact({
       name,
       email,
       message 
    });

    newContact.save();

})

module.exports = router;