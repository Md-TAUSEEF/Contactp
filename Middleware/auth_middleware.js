const jwt = require("jsonwebtoken");
const User = require("../Modules/user_modules");

const authmiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }

    const jwtToken = token.replace("Bearer ", "").trim(); 

    try {
        // verify the token
       
        const isVerifiedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);

        // const isVerifiedToken = jwt.verify(jwtToken,process.env.JWT_SECRET);

        console.log(isVerifiedToken);

        const userData = await User.findOne({ email: isVerifiedToken.email }).select({
            password: 0,
        });

        req.token = token;
        req.user = userData;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.log(`Error occurred in middleware: ${error}`); 
        return res.status(500).json({ message: "Internal Server Error" }); 
    }
};

module.exports = authmiddleware;
