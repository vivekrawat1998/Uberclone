// ride.routes.js
const express = require('express');
const { body } = require('express-validator');
const authmiddleware = require('../middlewares/auth.middleware');
const { createRide } = require('../controllers/ride.controllers');

const router = express.Router();

router.post(
  '/create',
  authmiddleware.authUser, 
  body('pickup')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid pickup address'),
  body('destination')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid destination address'),
  body('vehicleType')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Invalid vehicle type'),
  createRide 
);

module.exports = router;
