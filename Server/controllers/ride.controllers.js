const { validationResult } = require("express-validator");
const rideService = require("../services/ride.services");
const mapServices = require("../services/Maps.services");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model")
module.exports.createRide = async (req, res) => {
  console.log("Received Request Body:", req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;
  const userId = req.user._id;

  if (!pickup || !destination || !vehicleType) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const ride = await rideService.createRide({
      user: userId,
      pickup: pickup,
      destination: destination,
      vehicleType: vehicleType,
    });
    res.status(201).json(ride);
    const pickupCordinates = await mapServices.getAddressCoordinate(pickup);
    const captainInRadius = await mapServices.getCaptainsInTheRadius(
      pickupCordinates.ltd,
      pickupCordinates.lng,
      2
    );
    ride.otp = "";
    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");
    captainInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });

    console.log(captainInRadius);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
