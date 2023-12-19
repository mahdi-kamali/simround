const mongoose = require("mongoose");

const SimCartModel = new mongoose.Schema({
    numbers: {
        type: String,
        required: [true, "Please Enter Numbers."]
    },
    price: String,
    sellerID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter sellerID."]
    },
    activationDate: Date,
    isActivated: {
        type: Boolean,
        default: false
    },
    operatorName: {
        type: String,
        required: [true, "Please Enter Operator Name."]
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model("SimCart", SimCartModel);
