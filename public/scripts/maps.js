//Client facing script, displays the list of all available maps

//const { info } = require("sass");

// Initializes the google map API and displays it in the div container
function initMap(center) {
  const map = new google.maps.Map(document.getElementById("locs-container"), {
    zoom: 8,
    center: center,
  });

  //displaying marker
  const marker = new google.maps.Marker({
    position: center,
    map: map,
  });
  map.setCenter(center);
  //toggleBounce(marker); // not working
  console.log("before infowindow");
  const infowindow = new google.maps.InfoWindow({
    content: "<p>You are here!</p>",
  });
  console.log("maker:", marker);

  marker.addListener("click", () => {
    console.log("Marker click event fired");
    //toggleBounce(marker);//not working
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

//--copying from locs.js----------------------------------------------------------------
function initMapLoc(mapLocs) {
  // Check if mapLocs is an empty array or doesn't exist
  if (!mapLocs || mapLocs.length === 0) {
    console.error("No location data available.");
    return;
  }

  const fetchMapCenter = mapLocs[0];
  const mapCenter = fetchMapCenter["center"];

  const map = new google.maps.Map(document.getElementById("locs-container"), {
    zoom: 13,
    center: mapCenter,
  });

  for (let loc of mapLocs) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(loc.lat, loc.lng),
      map: map,
      title: loc.title,
      animation: google.maps.Animation.DROP,
    });
    marker.setMap(map);

    //display info window when a marker is clicked
    const infowindow = new google.maps.InfoWindow({
      content: `<p>${loc.title}</p>`,
    });

    //Toggle the animation of a marker between bouncing and not bouncing when clicked on
    marker.addListener("click", () => {
      toggleBounce(marker);
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
}
function currentlocMap() {
  //getting user's current location and initializaing a map
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const center = { lat: lat, lng: long };

    initMap(center);
  });
}

//Toggle the animation of a marker between bouncing and not bouncing
function toggleBounce(marker) {
  if (marker.getAnimation() === null) {
    // if marker is not animated, make it bounce
    marker.setAnimation(google.maps.Animation.BOUNCE);

    // Stop bouncing after  1 sec
    setTimeout(() => {
      marker.setAnimation(null);
    }, 1000);
  }
}

//function to show map locations for a map
function showMapLocations(mapid) {
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
          center: { lat: loc.center_latitude, lng: loc.center_longitude },
          draggable: true,
          clickable: true,
          animation: google.maps.Animation.DROP,
        };

        mapLocs.push(locationDetails);
      }

      initMapLoc(mapLocs);
    })

    .fail((xhr, status, error) => {
      console.error("Ajax request failed:", status, error);
    });
}
// This code runs when the DOM is ready
$(() => {
  //display user's current location on the map
  currentlocMap();

  const $mapsContainer = $("#maps-container");
  var location = {};
  // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
  $.ajax({
    method: "GET",
    url: "/api/maps",
  }).done((response) => {
    // When the AJAX request is successful, this callback function is executed.

    $mapsContainer.empty(); // Empty the content of the 'maps-container' div.

    // Loop through the array of available maps in the response and create a map for each.
    for (const map of response.maps) {
      const eachMapContainer = `

        <h3>
        <a href="#" id="showLoc" onclick="javascript:showMapLocations(${map.id})"> ${map.title} </a></h3>
      </div>`;
      // Append the each map's container to the 'maps-container' div.
      $($mapsContainer).append(eachMapContainer);
    }
  });
});
