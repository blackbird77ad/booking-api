import { Booking } from "../models/booking-model.js";

//Gets all bookings
export const getAllBookings = async (req, res, next) => {
 try {
  const book = await Booking.find();
  res.status(200).json(book)
 } catch (error) {
     next(error);
 }
}

//get a booking
export const getOneBooking = (req, res, next) => {
  try {
    res.status(200).json("This is one bookings");
  } catch (error) {
    next(error);
  }
}

//Add or post a booking
export const postBooking = async (req, res, next) => {
  try {
    //Validate user input
        //write todo to database
        await Booking.create(req.body);
        
    // const newBooking = new Booking();
    // // console.log('request', req)
    // const bookings = await newBooking.save(req.body)
//Respond to request
    // res.status(201).json("bookings");

    //Respond to request
    res.status(201).json("Booking created successfully");
  } catch (error) {
    next(error);
  }
}

//update a booking with either patch or put
export const updateBooking = (req, res, next) => {
  try {
    res.status(201).json("Booking updated successfully");
  } catch (error) {
    next(error);
  }
}

//Delete a booking
export const deleteBooking = (req, res, next) => {
  try {
    res.status(201).json("Booking delete successfully");
  } catch (error) {
    next(error);
  }
}