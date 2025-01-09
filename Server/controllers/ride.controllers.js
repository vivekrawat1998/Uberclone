// ride.controllers.js
const { validationResult } = require('express-validator');
const rideService = require('../services/ride.services');

module.exports.createRide = async (req, res) => {
  console.log('Received Request Body:', req.body); 
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;
  const userId = req.user._id;

  if (!pickup || !destination || !vehicleType) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const ride = await rideService.createRide({
      user: userId,
      pickup: pickup,
      destination: destination,
      vehicleType: vehicleType,
    });
    res.status(201).json(ride);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
