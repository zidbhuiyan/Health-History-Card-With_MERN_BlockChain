const mongoose = require("mongoose");

const contactsSchema = {
    name: String,
    email: String,
    message: String
}


const Contact = mongoose.model("Contact", contactsSchema);

module.exports = Contact;
