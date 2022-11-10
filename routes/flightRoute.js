const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

// router.get('/', controller.example)

router
    .get("/", controller.getAllFlightBookings)
    .get("/:id", controller.getSingleFlightBooking)
    .post("/", controller.createFlightBooking)
    .put("/:id", controller.editSingleFlight)
    .delete("/:id", controller.deleteFlight);

module.exports = router;

