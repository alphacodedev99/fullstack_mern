const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
});

const UserModel = Mongoose.model("users", userSchema);

module.exports = UserModel;