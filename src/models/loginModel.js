const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    }
});

const LoginModel = model('login', loginSchema);

module.exports = LoginModel;
