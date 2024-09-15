//this folder is making for when you are messing any any form then it will inform you you do not fill this form 

// ishke lie hame zod install karna parega


//isse pehle hi hamne usercontroller banaya h par ushe ye feature nahi h to ham usercontroller ko body me pass karenge aur compaire kareneg dono ko 
// ki kya fill nahi kiya wo message karde compaire karne ke liye MIDDLEWARE ke andar aut_validotor banalenge aur wo comparekarega



const { compare } = require("bcrypt")
const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

module.exports = signupSchema; 