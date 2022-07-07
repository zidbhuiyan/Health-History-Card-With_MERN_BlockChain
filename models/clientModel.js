const mongoose = require("mongoose");

const clientsSchema = {
    firstname: String,
    lastname: String,
    birthid: String,
    nid: String,
    hid: String,
    email:String,
    bloodgroup:String,
    dateofbirth: String,
    phonenumber: String,
    fathersname: String,
    fathersnid: String,
    mothersname: String,
    mothersnid: String,
    presentaddress: String,
    permanentaddress: String,
    password: String,
    confirmpassword: String,
    gender: String,
    emergphonenumber: String
}

const Client = mongoose.model("Client", clientsSchema);

module.exports = Client;