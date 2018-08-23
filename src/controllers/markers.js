import secrets from '../../src/secrets';
let markers = [],
    alertCount = 0;

export const get = (lat, lng) => {
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${secrets.clientId}&client_secret=${secrets.clientSecret}&ll=${lat},${lng}&v=20180101`;

    return fetch(url).then((res) => {
        return res.json().then(data => {
            return data;
        });
    }).then(res => {
        return res.response.venues;
    }).then(data => {
        markers = data.slice(0, 15);
        markers = markers.map(place => {
            return {
                id: place.id,
                name: place.name,
                address: place.location.address,
                lat: place.location.lat,
                lng: place.location.lng,
                category: place.categories[0]
            }
        });
        localStorage.setItem('markers', JSON.stringify(markers));
        return markers;
    }).catch(err => {
        console.log(err);
        alertCount++;
        if (alertCount === 1)
            alert('Seems like you are offline. Please make sure you have internet connection.');
        markers = localStorage.getItem('markers');
        markers = JSON.parse(markers);
        if (markers) {
            return markers;
        } else {
            return [];
        }
    });
}