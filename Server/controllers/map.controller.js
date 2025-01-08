const mapsService = require('../services/Maps.services');
const {validationResult} = require('express-validator');

module.exports.getCordinates = async (req,res,next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {address} = req.query;
        const coordinates = await mapsService.getAddressCoordinate(address);
        res.status(200).json({
            coordinates
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}