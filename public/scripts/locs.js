function initMap(mapLocs) {
  //console.log("inside initMap");

  const map = new google.maps.Map(document.getElementById("mapDiv"), {
    zoom: 7,
    center: { lat: 40.785091, lng: -73.970002 },
    // mapTypeId: 'satellite'
  });
  //console.log("mapLocs:", mapLocs);
  for (let loc of mapLocs) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      title: loc.title,
    });
    marker.setMap(map);
  }
}

window.onload = function () {
  //remove
  console.log("Window Loaded");
};

////
// This code runs when the DOM is ready
$(document).ready(function () {
  //console.log("inside ready");

  const mapDiv = $("#mapDiv");
  const mapid = window.location.pathname.split("/")[2]; //spliting the url to get the id parameter
  //console.log("mapid", mapid);

  // Make an AJAX (asynchronous) GET request to the '/api/locs' endpoint on the server.
  $.ajax({
    method: "GET",
    url: `/api/locs/${mapid}`,
    dataType: "json",
    // data: {mapid: req.params.mapid}//only for post or put
  })
    .done((response) => {
      // When the AJAX request is successful, this callback function is executed.

      mapDiv.empty(); // Empty the content of the 'mapDiv' div.

      var mapLocs = []; //create an array to store multiple locations for a map
      // Loop through the array of available locations in the response and add to the map.
      for (const loc of response.locations) {
        var obj = {
          lat: loc.latitude,
          lng: loc.longitude,
          title: loc.title,
          //center: loc.lat  , (Mehwish says: needs to be updated once a map has  lat and long)
        };
        mapLocs.push(obj);
      }
      initMap(mapLocs);
    })

    .fail((xhr, status, error) => {
      console.error("Ajax request failed:", status, error);
    });
});
