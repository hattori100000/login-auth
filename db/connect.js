// const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://clownlaugh100:thapa@cluster0.4lwnzmo.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log(` Congras you are connected to db`))
// .catch((err) => console.log( " you have an errr in db connection",err))
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/login";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("You are connected to db"))
.catch((err) => console.log("Sorry, no connection to db:", err));

