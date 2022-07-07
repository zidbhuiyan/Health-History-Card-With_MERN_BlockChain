const mongoose = require("mongoose");

const reportstaffsSchema = {
    firstname: String,
    lastname: String,
    Rregid: String,
    nid: String,
    dateofbirth: String,
    phonenumber: String,
    hospitalname: String,
    gender: String,
    password: String,
    confirmpassword: String,
}

const Reportstaff = mongoose.model("Reportstaff", reportstaffsSchema);

module.exports = Reportstaff;
