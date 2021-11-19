
var haunted_map = L.map('haunted_map').setView([29.327745, -118.812595], 2.79);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:'pk.eyJ1IjoianVsaWFtaXRjaGVtIiwiYSI6ImNrdzNyeXNwczAxajAydHNhMmZrNGd5bW0ifQ.GELH1iPsnjPD5HT0CpBlnA'
}).addTo(haunted_map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(haunted_map);
}
