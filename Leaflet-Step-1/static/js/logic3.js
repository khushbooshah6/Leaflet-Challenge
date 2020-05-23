// Creating map object
var myMap = L.map("map", {
  center: [
      37.09, -95.71
    ],
  zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var data_url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(data_url, function(response) {

  // Create a new marker cluster group
    var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.features.length; i++) {

    // Set the data location property to a variable
    var location = response.features[i].geometry;

    // Check for location property
    if (location) {
      //console.log(location.coordinates[0])
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(location.coordinates[2]));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});