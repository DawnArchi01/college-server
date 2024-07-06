const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: {type: String, required: true},
    lname: String,
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    userType: {type:String, required: true},
    pdf: {type: String }
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
