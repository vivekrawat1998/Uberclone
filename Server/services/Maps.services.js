const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const GOMAPS_API_KEY = "AlzaSyQvp5fdCC9U1jDdFCoKNQQZnLhEkwD5IXZ";
    const apiKey = GOMAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        console.log(`Requesting URL: ${url}`); 
        const response = await axios.get(url);
        const data = response.data;

        console.log('GoMaps API response:', data); 

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            console.error('GoMaps API error:', data.status, data.error_message); 
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request data:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        throw new Error('Error occurred while fetching coordinates');
    }
};