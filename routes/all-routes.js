//Import from express folder or framework package called Router
import { Router } from "express";

//Import internal controllers to be passed to the variable called bookingRouter
import { getAllBookings } from "../controllers/booking-controllers.js";
import { getOneBooking } from "../controllers/booking-controllers.js";
import { postBooking } from "../controllers/booking-controllers.js";
import { updateBooking } from "../controllers/booking-controllers.js";
import { deleteBooking } from "../controllers/booking-controllers.js";

//Export router from express in variable bookingRouter
export const bookingRouter = Router();

//route for getting all booking
bookingRouter.get('/bookings', getAllBookings);

//route for getting a booking
bookingRouter.get('/bookings/id', getOneBooking);

//route for posting or adding a booking
bookingRouter.post('/bookings', postBooking);

//route for updating a booking
bookingRouter.patch("/bookings:id", updateBooking);

//route for deleting a booking
bookingRouter.delete('/bookings:id', deleteBooking);