
var hometown_map = L.map('hometown_map').setView([27.976341, -82.603984], 9.35);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:'pk.eyJ1IjoianVsaWFtaXRjaGVtIiwiYSI6ImNrdzNyeXNwczAxajAydHNhMmZrNGd5bW0ifQ.GELH1iPsnjPD5HT0CpBlnA'
}).addTo(hometown_map);

let marker1 = L.marker([27.953457505337187, -82.8028470692104]).addTo(hometown_map);
marker1.bindPopup("<b>Morton Plant Hospital</b><br>This is where I was born.");

let marker2 = L.marker([27.94879502047337, -82.45597980072282]).addTo(hometown_map);
marker2.bindPopup("<b>The Attic Café</b><br>This is my favorite coffee shop.");

let marker3 = L.marker([28.093109273386293, -82.78063629516329]).addTo(hometown_map);
marker3.bindPopup("<b>Crystal Beach Pier</b><br>This is the best spot to watch the sunset in my neighborhood.");

let marker4 = L.marker([27.76611743964473, -82.63160036025118]).addTo(hometown_map);
marker4.bindPopup("<b>The Dalí</b><br>This is my favorite museum.");
