//Client facing script, displays the list of all favourite maps of user

// Initializes the google map API and displays it in the div container
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

  const $favsContainer = $('#favs');

  // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/maps'
  })
  .done((response) => {
    // When the AJAX request is successful, this callback function is executed.

    $favsContainer.empty();  // Empty the content of the 'maps-container' div.

    // Loop through the array of available maps in the response and create a map for each.
    for (const map of response.maps) {


      // Create a new map container with a unique ID based on the map's ID.
      const mapId = `map-${map.id}`;

      const eachFavContainer = $(`
      <div class="each-fav-container">
        <div id="${mapId}" class="fav">
        </div>
        <h3> <a href="/locs/${map.id}"> ${map.title} </h3> </a>
      </div>`);


      // Append the each map's container to the 'maps-container' div.
      $($favsContainer).append(eachFavContainer);

      // Define the location for each map
      const location = { lat: map.center_latitude, lng: map.center_longitude };

      // Call the initMap function to initialize the Google Map for this location
      initMap(location, mapId);
    }

  });

   // Event listener for the homepage link
  const homeLink = document.getElementById('home-link');

    if (homeLink) {
      homeLink.addEventListener('click', function () {
        window.location.href = '/';
      });
    }

 });



