require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN});

async function geocoder(location) {
    try {
        let response = await geocodingClient
    .forwardGeocode({
        query: location,
        limit: 1
    })
    .send();
    const match =response.body;
    console.log(match.features[0].geometry.coordinates);

    } catch (error) {
        console.log(error.message);
    }    
};

geocoder('Matosinhos, PT');



