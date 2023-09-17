//Jeremy  (
//load up map by device location
//get click event data from user
//save data
//send to db create map route/function
//refresh?)


//Client facing script, displays the list of all available maps

// Initializes the google map API and displays it in the div container


// let location = ""

// // get gelocation from browser
// if ("geolocation" in navigator) {
//           navigator.geolocation.getCurrentPosition(function(position) {
// //       // Get the latitude and longitude from the position object
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         let location = {lat: latitude, lng: longitude }
//       position: { lat: -34.397, lng: 150.644 },
//       // Update the HTML elements with the latitude and longitude
//       // document.getElementById("latitude").textContent = latitude;
//       //document.getElementById("longitude").textContent = longitude;
//   });
// } else {
//   alert("Geolocation is not supported in your browser.");
// }


//load map using geolocation coordinates
function initMap(location, mapId) {

  const map = new google.maps.Map(document.getElementById(mapId), {
    zoom: 7,
    center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
};


 // This code runs when the DOM is ready
$(() => {

  //const $createMapContainer = $('#create-map-container');

  // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/maps'
    //jeremy, I had the wrong ajax call
  })
  .done(() => {
    // When the AJAX request is successful, this callback function is executed.
    console.log("Calling Ajax");
    //initMap(location)

    //$createMapContainer.empty();  // Empty the content of the 'maps-container' div.

    // Loop through the array of available maps in the response and create a map for each.
    // for (const map of response.maps) {

    //   // Create a new map container with a unique ID based on the map's ID.
    //   const mapId = `map-${map.id}`

    //   //THIS NEEDS TO BE UPDATE JEREMY TO JEREMY
    //   const eachMapContainer = $(`<div id="${mapId}" class="map"><a href="/api/locs/${map.id}"> View map </a></div>`);

    //   // Append the each map's container to the 'maps-container' div.
    //   $($createMapContainer).append(eachMapContainer);

    //   // Define the location for each map
    //   const location = { lat: map.latitude, lng: map.longitude };

    //   // Call the initMap function to initialize the Google Map for this location
    //   initMap(location, mapId);
    // }
  });

 });





//get user event data from api




//send to database via post



