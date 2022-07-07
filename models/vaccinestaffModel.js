const mongoose = require("mongoose");

const vaccinestaffsSchema = {
    firstname: String,
    lastname: String,
    Vregid: String,
    nid: String,
    dateofbirth: String,
    phonenumber: String,
    hospitalname: String,
    gender: String,
    password: String,
    confirmpassword: String,
}

const Vaccinestaff = mongoose.model("Vaccinestaff", vaccinestaffsSchema);

module.exports = Vaccinestaff;
