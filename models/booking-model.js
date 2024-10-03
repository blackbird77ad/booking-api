import { Schema, model} from "mongoose";

const bookingSchema = new Schema({
    firstName : {
        type: String,
        // required: true
    },

    lastName : {
        type: String,
        // required: true
    },

    sex : {
        type: String,
        enum: {
            values: ['male', 'female']
        },
        // required: true
    },
    
    seatNumber : {
        type: Number,
        // required: true
    },

    email: {
        type: String,
        unique: true,
        // required: true
    },
    // duration schema here
})

export const Booking =model("Booking", bookingSchema)