import { booking } from "../models/booking-model.js";

//Gets all bookings
export const getAllBookings = (req, res, next) => {
 res.status(200).json("These are all the bookings")
}

//get a booking
export const getOneBooking = (req, res, next) => {
  res.status(200).json("This is one bookings");
}

//Add or post a booking
export const postBooking = async (req, res, next) => {
  const newBooking = await new booking();

  // console.log('request', req)
  const bookings = await newBooking.save(req.body)
  res.status(201).json(bookings);
}

//update a booking with either patch or put
export const updateBooking = (req, res, next) => {
  res.status(201).json("Booking updated successfully");
}

//Delete a booking
export const deleteBooking = (req, res, next) => {
  res.status(201).json("Booking delete successfully");
}