const Contact = require("../Modules/contact_module");

const contactForm = async (req, res, next) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ 
            message: "Message sent successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports = contactForm;
