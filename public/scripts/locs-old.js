
//Client facing script, displays the list of all available maps

// Initializes the google map API and displays it in the div container
function initMap(location, locId) {

  const map = new google.maps.Map(document.getElementById(locId), {
    zoom: 10,
    center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
};


 // This code runs when the DOM is ready
$(() => {

  const $locsContainer = $('#locs-container');

  // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/locs'
  })
  .done((response) => {
    // When the AJAX request is successful, this callback function is executed.

    $locsContainer.empty();  // Empty the content of the 'maps-container' div.

    // Loop through the array of available maps in the response and create a map for each.
    for (const loc of response.locations) {
      console.log(loc);

      // Create a new map container with a unique ID based on the map's ID.
      const locId = `map-${loc.id}`;

      const eachLocContainer = $(`<div id="${locId}" class="marker"></div>`);

      // Append the each map's container to the 'maps-container' div.
      $($locsContainer).append(eachLocContainer);

      // Define the location for each map
      const location = { lat: loc.latitude, lng: loc.longitude };

      // Call the initMap function to initialize the Google Map for this location
      initMap(location, locId);
    }
  });

 });



