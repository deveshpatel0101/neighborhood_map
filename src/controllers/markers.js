import secrets from '../../src/secrets';
import axios from 'axios';
let markers = [];

export const get = (lat, lng) => {
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${secrets.clientId}&client_secret=${secrets.clientSecret}&ll=${lat},${lng}&v=20180101`;
    
    return axios.get(url).then((res) => {
        return res.data.response.venues;
    }).then(data => {
        markers = data.slice(0, 15);
        markers = markers.map(place => {
            return {
                id: place.id,
                name: place.name,
                address: place.location.address,
                lat: place.location.lat,
                lng: place.location.lng
            }
        });
        return markers;
    });
}