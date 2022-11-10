const Flights = require("../models/Flight");
const { v4: uuid } = require("uuid");

// Get all Flights
exports.getAllFlightBookings = async(req, res) => {
    try{
        const bookings = Flights;
        if (bookings.length === 0) {
            res.status(200).json({
                message: "No Booked Flight"
            });
        } else {
            res.status(200).json({
                message: "All Flight Bookings",
                booking_details: bookings
            })
        }
    } catch (error) {
        res.status(500).send({ message: error.message});
    }
};

// Get Single Flight Bookings
exports.getSingleFlightBooking = async (req, res) => {
    try {
        const booking = Flights.find( (flight) => flight.id === req.params.id);
        res.status(200).json({
            message: "Flight Booking Found",
            bookingDetails: booking
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create/Book a Flight
exports.createFlightBooking = async (req, res) => {
    try {
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date
        };
        Flights.push(newFlight);
        res.status(201).json({
            message: "New Flight Booked",
            bookingDetails: newFlight
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update/Edit Single Flight
exports.editSingleFlight = async (req, res) => {
    try {
        const booking = Flights.find( (flight) => flight.id === req.params.id);
        const { title, time, price, date } = await req.body;
        booking.title = title;
        booking.time = time;
        booking.price = price;
        booking.date = date

        res.status(200).json({ 
            message: "Flight Booking Updated",
            updateDetails: booking
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Flight Booking
exports.deleteFlight = async (req, res) => {
    try {
        const booking = Flights.find( (flight) => flight.id === req.params.id);
        Flights.splice(Flights.indexOf(booking), 1);
        res.status(200).json({
            message: "Flight Deleted",
            deletedFlight: booking
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }


