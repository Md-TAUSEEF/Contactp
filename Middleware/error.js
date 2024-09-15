const Errorhandler = require("../utils/Eroorhandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Kabhi kabhi har Postman me ID galat dete hain, wo jo error aata hai use CastError kahte hain
    if (err.name === "CastError") {
        const message = `MongoDB ID is not found: ${err.path}`;
        err = new Errorhandler(message, 400);
    }

    if (err.name === "JsonWebTokenError") {
        const message = `Token is invalid, try again ${err.path}`;
        err = new Errorhandler(message, 400);
    }

    // Agar kabhi token expire ho jaye to
    if (err.name === "TokenExpiredError") {
        const message = `Token is expired, try again ${err.path}`;
        err = new Errorhandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
