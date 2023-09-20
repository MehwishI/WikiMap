//Client facing script, displays the list of all available maps

// Initializes the google map API and displays it in the div container
function initMap(location, mapId) {
  console.log("inside initMap", mapId);
  const map = new google.maps.Map(document.getElementById("locs-container"), {
    zoom: 8,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
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


    // Create an InfoWindow for each marker
    const infoWindow = new google.maps.InfoWindow({
      content: `<h3> ${loc.title}</h3><p>${loc.description}</p>`,
    });

    //Display infoWindow on mouseover
    marker.addListener("mouseover", () => {
      infoWindow.open(map, marker);
    });

    //Hide infoWindow on mouseout
    marker.addListener("mouseout", () => {
      infoWindow.close();
    });


    //Toggle the animation of a marker between bouncing and not bouncing when clicked on
    marker.addListener("click", () => {
      toggleBounce(marker);
    });

    marker.setMap(map);
  }
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
      console.log("response.locations", response.locations);
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

        <h3> <a href="#" id="showLoc" onclick="javascript:showMapLocations(${map.id})"> ${map.title} </h3> </a>
      </div>`;
      // Append the each map's container to the 'maps-container' div.
      $($mapsContainer).append(eachMapContainer);

      // // Define the location for each map
      location = { lat: map.center_latitude, lng: map.center_longitude };
    }
    // Call the initMap function to initialize the Google Map for this location
    initMap(location); //temporarily displaying the last map location (until user's currentl location functionality is done)
  });
});
