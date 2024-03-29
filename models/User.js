const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  email : {
    type: String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const data = mongoose.model("data", dataSchema)


module.exports = data;  