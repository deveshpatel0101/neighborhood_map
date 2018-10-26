## NEIGHBORHOOD MAP

## Table of Contents

* [Description](#description)
* [Dependencies](#dependencies)
* [Instructions](#instructions)
* [Contributing](#contributing)

### DESCRIPTION

Get information about places nearby your current location.

Bored? :disappointed: :disappointed_relieved: Want to have coffee at best place? Use our app to get best suggestions.

### DEPENDENCIES

1. React
2. Gooogle Javacript Maps API
3. Foursquare API

### INSTRUCTIONS

Follow below steps to start development server.
1. Clone or download this repository.
2. Run `npm install`.
3. Now you need to issue two API's to get started. 
  * [Google Maps API](https://console.developers.google.com): Create new project and enable `Maps Javascript API`. Now place this API key in `secrets.js` file located in `src` folder..
  * [Foursquare API](https://developer.foursquare.com/): Read docs and follow steps and then you will be provided with two keys *Client Secret* and *Client ID*. 
5. Now create a `secrets.js` file in src directory (`src/secrets.js`). Place those issued API's in this newly created `secrets.js` file as below:

```
let secrets =  {
     clientId: "YOUR_FOURSQUARE_CLIENT_ID_HERE",
     clientSecret: "YOUR_FOURSQUARE_CLIENT_SECRET_HERE",
     MapsAPI: "YOUR_GOOGLE_MAPS_API_HERE"
 }

 export default secrets;
```

4. Now run `npm start` to start development server. The application should start without any errors on [http://localhost:3000](http://localhost:3000).

## Contributing

This repository is a completed project which was assigned to FEND students of Udacity Nano Degree. Therefore, we most likely will not accept pull requests.

```
HAPPY CODING
HAPPY LEARNING
```