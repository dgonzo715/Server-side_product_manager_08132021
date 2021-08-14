const mongoose = require("mongoose");
const ProductmanagerSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [ true, "You must hava a title for a product to view!" ],
            minlength: [4, "Your product must be at least 4 characters long!"]
        },
        price: {
            type: Number,
            required: [ true, "The price of each product will determine the shipping charge!"],
            min: [ 10, "The minium value to spend should be more than 50 dollars."],
        },
        description: {
            type: String,
            required: [ true, "Any and all items must be purchased on-line." ],
            enum: ["Apparel","Gardening Equipment","Kitchen Utensils","Books","Albums","Computer Equipment","Home Decor","Cellular Phones" ],
        }
},
{ timestamps: true });


module.exports = mongoose.model("ProductManager", ProductmanagerSchema);