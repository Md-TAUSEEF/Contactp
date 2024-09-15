const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Errorhandler = require("../utils/Eroorhandler")



// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//bcrypt function

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified) {
    return next();
  }

  try {
    const soltround = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(user.password, soltround);
    user.password = hashpassword;
  } catch (error) {
    return next(new Errorhandler("password is nto found",400))
  }
});

//token

userSchema.methods.getJWTToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
  } catch (error) {
    console.error("Token Error: ", error);
  }
};


//login
userSchema.methods.comparepassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
}


// define the model or the collection name
const User = new mongoose.model("USER", userSchema);
module.exports = User;
