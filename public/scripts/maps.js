//Client facing script, displays the list of all available maps



 // This code runs when the DOM is ready
$(() => {

  // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
  $.ajax({
    method: 'GET',
    url: '/api/maps'
  })
  .done((response) => {
    // When the AJAX request is successful, this callback function is executed.
    const $mapsList = $('#maps'); //assigns the element with id 'maps' from maps.ejs to a variable
    $mapsList.empty();  // Empty the content of the 'maps' element.

    // Loop through the array of available maps in the response and create a list item for each.
    for (const map of response.maps) {
      // Create a new list item element with a class 'map' and set its text content to the map title and description.
      $(`<li class="available-maps">`).text(map.title).appendTo($mapsList);
    }
  });


 });


// Initializes the google map API and displays it in the div container with id=map
function initMap() {
   console.log("initMap function called");
    const location = { lat: 53.5022977, lng: -113.4627523 };
    const map = new google.maps.Map(document.getElementById("edmonton-map"), {
      zoom: 7,
      center: location
    });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
};