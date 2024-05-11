require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");
const mongoose = require("mongoose")

const schema = new mongoose.Schema({name: String})
const User = mongoose.model("User", schema)

// mongoose
//   .connect("mongodb://mongo:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "ya ya to bezkoder application." });
//   mongoose.Collection("test").
    // const pepe = new User({name: `pepe ${new Date().getTime()}`})
    // pepe.save()
});

app.get("/auth/signin", (req, res) => {
  res.json({ message: "here is the auth my men" });
//   mongoose.Collection("test").
    // const pepe = new User({name: `pepe ${new Date().getTime()}`})
    // pepe.save()
});

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = 9002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
