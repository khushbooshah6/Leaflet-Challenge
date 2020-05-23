// Creating map object
var map = L.map("map", {
    center: [
        37.09, -95.71
      ],
    zoom: 5
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(map);
  
  // If data.beta.nyc is down comment out this link
  var data_url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

  // Uncomment this link local geojson for when data.beta.nyc is down
  // var link = "static/data/nyc.geojson";
  
  // Grabbing our GeoJSON data..
  d3.json(data_url, function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
  });