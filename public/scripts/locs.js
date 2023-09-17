
// const locations = [
//   { lng: -122.489017,lat: 37.769420,title:'Golden Gate Park' },
//   { lng: -73.970002, lat:40.785091,title:'Central Park' },
//   { lng:-74.044502, lat: 40.689247,title:'Statue of Liberty' },

// ];

function initMap(mapLocs) {
  console.log("inside initMap")

  const map = new google.maps.Map(document.getElementById('mapDiv'), {
    zoom: 7,
    center: { lat:40.785091, lng:-73.970002},
   // mapTypeId: 'satellite'
  });
  console.log(map)
for(let loc of mapLocs) {


  var marker = new google.maps.Marker({
    position:new google.maps.LatLng(loc.lat, loc.lng),
    map: map,
    title: loc.title
  });
  marker.setMap(map)

}};




////
// This code runs when the DOM is ready
$(document).ready(() => {
  console.log("inside ready")

  const mapDiv = $('#mapDiv');

  // Make an AJAX (asynchronous) GET request to the '/api/locs' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/locs',
    //data: {mapid: req.params.mapid}
  })
  .done((response) => {
    // When the AJAX request is successful, this callback function is executed.
  console.log("inside ajax get, response=",response.locations)
    mapDiv.empty();  // Empty the content of the 'mapDiv' div.
    //const locations = JSON.parse(response.locations);
    //console.log(locations)
    var mapLocs = []
    // Loop through the array of available locations in the response and add to the map.
   for (const loc of response.locations) {

     var obj= {

      lat:  loc.latitude,
      lng:  loc.longitude,
      title:loc.title
     }
     mapLocs.push(obj)
    }
      // Create a new map container with a unique ID based on the map's ID.
      //const locId = `map-${loc.id}`

      //const eachlocContainer = $(`<div id="${mapId}" class="map"></div>`);

      // Append the each map's container to the 'maps-container' div.
      //$($map).append(eachMapContainer);

      // Define the location for each map
     //const location = {  lat: -31.56391, lng: 147.154312  };

      // Call the initMap function to initialize the Google Map for this location
     // initMap(location, mapId);

     console.log("inside locs")
     initMap(mapLocs);

  })

  .fail((xhr, status, error) => {
    console.error("Ajax request failed:", status, error);
 });


 });



