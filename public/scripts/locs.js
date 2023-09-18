function initMap(mapLocs) {
  // Check if mapLocs is an empty array or doesn't exist
  if (!mapLocs || mapLocs.length === 0) {
    console.error("No location data available.");
    return;
  }

  const fetchMapCenter = mapLocs[0];
  const mapCenter = fetchMapCenter.center;

  const map = new google.maps.Map(document.getElementById("locs-container"), {
    zoom: 13,
    center: mapCenter
  });

  for (let loc of mapLocs) {

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      title: loc.title
    });
    marker.setMap(map);
  }
};


// This code runs when the DOM is ready
$(() => {

  const $locsContainer = $("#locs-container");
  const mapid = window.location.pathname.split("/")[2]; //spliting the url to get the id parameter

  // Make an AJAX (asynchronous) GET request to the '/api/locs' endpoint on the server.
  $.ajax({
    method: "GET",
    url: `/api/locs/${mapid}`,
    dataType: "json",
  })
    .done((response) => {
      // When the AJAX request is successful, this callback function is executed.

      let mapLocs = []; //create an array to store multiple locations for a map

      // Loop through the array of available locations in the response and add to the map.
      for (const loc of response.locations) {

        //Create an object to hold each location's necessary details
        const locationDetails = {
          lat: loc.latitude,
          lng: loc.longitude,
          title: loc.title,
          description: loc.description,
          center: { lat: loc.center_latitude, lng: loc.center_longitude }
        };

        mapLocs.push(locationDetails);

      };

      initMap(mapLocs);

    })

    .fail((xhr, status, error) => {
      console.error("Ajax request failed:", status, error);
    });
});
