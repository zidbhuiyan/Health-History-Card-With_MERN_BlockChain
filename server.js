const express =require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shakila_miti:h2oh2oh2o@cluster0.rq5w1.mongodb.net/medical-history-card");

app.use("/", require("./routes/contactRoute"));
app.use("/", require("./routes/clientRoute"));
app.use("/", require("./routes/doctorRoute"));
app.use("/", require("./routes/reportstaffRoute"));
app.use("/", require("./routes/vaccinestaffRoute"));
app.use("/", require("./routes/clientLoginRoute"));
app.use("/", require("./routes/vaccineStaffLoginRoute"));
app.use("/", require("./routes/reportStaffLoginRoute"));
app.use("/", require("./routes/doctorLoginRoute"));
app.use("/", require("./routes/searchClientRoute"));

app.listen(3001,function(){
    console.log("express server is running on port 3001");
})
