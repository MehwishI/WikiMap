// async function initMap() {
//   // Request needed libraries.
//   const { Map, InfoWindow } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
//     "marker",
//   );
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 3,
//     center: { lat: -28.024, lng: 140.887 },
//     mapId: "DEMO_MAP_ID",
//   });
//   const infoWindow = new google.maps.InfoWindow({
//     content: "",
//     disableAutoPan: true,
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   // Add some markers to the map.
//   const markers = locations.map((position, i) => {
//     const label = labels[i % labels.length];
//     const pinGlyph = new google.maps.marker.PinElement({
//       glyph: label,
//       glyphColor: "white",
//     });
//     const marker = new google.maps.marker.AdvancedMarkerElement({
//       position,
//       content: pinGlyph.element,
//     });

//     // markers can only be keyboard focusable when they have click listeners
//     // open info window when marker is clicked
//     marker.addListener("click", () => {
//       infoWindow.setContent(position.lat + ", " + position.lng);
//       infoWindow.open(map, marker);
//     });
//     return marker;
//   });

//   // Add a marker clusterer to manage the markers.
//   new MarkerClusterer({ markers, map });
// }
const locations = [
  { lat: -31.56391, lng: 147.154312,title:'A' },
  { lat: -33.718234, lng: 150.363181,title:'B' },
  { lat: -33.727111, lng: 150.371124,title:'C' },


];

function initMap() {

  const map = new google.maps.Map(document.getElementById(map), {
    zoom: 7,
    center: { lat: -33.727111, lng: 150.371124 }
  });
for(let loc of locations) {


  var marker = new google.maps.Marker({
    position:new google.maps.LatLng(loc.lat, loc.lng),
    map: map,
    title: loc.title
  });
  marker.setMap(map)

}};




////
// This code runs when the DOM is ready
// $(() => {

//   const $map = $('#map');

//   // Make an AJAX (asynchronous) GET request to the '/api/locs' endpoint on the server.
//   $.ajax({
//     method: 'GET',
//     url: '/api/locs/id'
//   })
//   .done((response) => {
//     // When the AJAX request is successful, this callback function is executed.

//     $map.empty();  // Empty the content of the 'maps-container' div.

//     // Loop through the array of available maps in the response and create a map for each.
//     for (const loc of response.locations) {

//       // Create a new map container with a unique ID based on the map's ID.
//       //const locId = `map-${loc.id}`

//       //const eachlocContainer = $(`<div id="${mapId}" class="map"></div>`);

//       // Append the each map's container to the 'maps-container' div.
//       //$($map).append(eachMapContainer);

//       // Define the location for each map
//      const location = {  lat: -31.56391, lng: 147.154312  };

//       // Call the initMap function to initialize the Google Map for this location
//      // initMap(location, mapId);
//     }
//   });

//  });
// /////

initMap();
