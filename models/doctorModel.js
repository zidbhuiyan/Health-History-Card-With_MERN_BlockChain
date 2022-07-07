const mongoose = require("mongoose");

const doctorsSchema = {
    Dfirstname: String,
    Dlastname: String,
    Docregid: String,
    Dnid: String,
    Ddateofbirth: String,
    Dphonenumber: String,
    hospitalname: String,
    Dgender: String,
    Dpassword: String,
    Dconfirmpassword: String,
}

const Doctor = mongoose.model("Doctor", doctorsSchema);

module.exports = Doctor;
