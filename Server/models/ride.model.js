// ride.model.js
const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Ensure the correct reference model here (e.g., User model)
    required: true
  },
  pickup: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  fare: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'completed', 'ongoing', 'cancel'],
    default: 'pending'
  },
  otp:{
    type:String,
    selected:false,
    required:true,
  }
});

module.exports = mongoose.model('Ride', rideSchema);