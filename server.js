'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// app.get('/', (request, response) => {
//   response.send('Hello Sams World');
// });

app.get('/location', (request, response) => {
  let city = request.query.city;
  let data = require('./data/location.json')[0];
  let location = new Location(data, city);
  response.send(location);
});

app.get('weather', (request, response) => {

});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

function Location(obj, query){
  this.latitude = obj.lat;
  this.longitude = obj.lon;
  this.search_query = query;
  this.formatted_query = obj.display_name;
}
