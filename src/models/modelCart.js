import mongoose from "mongoose";

const cartCollection = "carrito"

const cartSchema = new mongoose.Schema({

    _id:{
        type: Number,
        required: true
    },
    timestamp:{
        type: Number,
        required: true
    },
    products:{
        type: Array,
        required: true
    }
})


export const cartModel = mongoose.model(cartCollection, cartSchema)