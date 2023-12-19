const mongoose = require("mongoose");

const OrderModel = new mongoose.Schema({
    sellerID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter sellerID."],
    },
    buyerID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter BuyerID."],
    },
    simCartID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter SimCartID."],
    },
    paymentMethod: {
        type: String,
        required: [true, "Please Enter PAyment Method."]
    },
    price: {
        type: String,
        required: [true, "Please Enter Price."]
    },
    status: {
        type: String,
        default: "waiting"
    }

},
    {
        timestamps: true
    });

module.exports = mongoose.model("Order", OrderModel);
