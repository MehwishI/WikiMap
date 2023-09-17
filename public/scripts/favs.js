//Client facing script, displays the list of all favourite maps of user


// Initializes the google map API and displays it in the div container
function initMap(location, uid) {

  const map = new google.maps.Map(document.getElementById(uid), {
    zoom: 7,
    center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
};


 // This code runs when the DOM is ready, i.e., when the page is fully loaded.
$(() => {

  const $favsContainer = $('#favs');

  // Make an AJAX (asynchronous) GET request to the '/api/favs' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/favs'
  })
  .done((response) => {
    // When the AJAX request is successful, this callback function is executed.

    $favsContainer.empty();

    // Loop through the array of favourite maps
    for (const fav of response.favourites) {

      // Create a new container with a unique ID based on the favourited map uid
      const uid = `map-${fav.uid}`

      const eachFavouriteMap = $(`
      <div class="each-favourite-container">
        <div id="${uid}" class="fav-map">
        </div>
        <h5> ${fav.location_title} </h5>
      </div>`);


      // Append the each container to the 'fav' div.
      $($favsContainer).append(eachFavouriteMap);

      // Define the location for each map
      const location = { lat: fav.latitude, lng: fav.longitude };

      // Call the initMap function to initialize the Google Map for this location
      initMap(location, uid);

    }
  });
 });

