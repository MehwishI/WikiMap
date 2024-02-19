function initMap(mapLocs) {
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
      infoWindow.open({
        anchor: marker,
        map,
      })
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
function showMapLocations(mapid) {
  const $locsContainer = $("#locs-container");
  //const mapid = window.location.pathname.split("/")[2]; //spliting the url to get the id parameter

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
        // console.log(locationDetails);
        mapLocs.push(locationDetails);
      }

      initMap(mapLocs);
    })

    .fail((xhr, status, error) => {
      console.error("Ajax request failed:", status, error);
    });
}
// document.getElementsByTagName("a").addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent the default behavior of the anchor tag (e.g., navigating to a new page)
//   showMapLocations(mapid); // Call your function
// });

// This code runs when the DOM is ready
// $(() => {
//   // commented out by mehwish
//   // console.log("inside ready");
//   // function showMapLocations(mapid) {
//   //   const $locsContainer = $("#locs-container");
//   //   const mapid = window.location.pathname.split("/")[2]; //spliting the url to get the id parameter

//   //   // Make an AJAX (asynchronous) GET request to the '/api/locs' endpoint on the server.
//   //   $.ajax({
//   //     method: "GET",
//   //     url: `/api/locs/${mapid}`,
//   //     dataType: "json",
//   //   })
//   //     .done((response) => {
//   //       // When the AJAX request is successful, this callback function is executed.

//   //       let mapLocs = []; //create an array to store multiple locations for a map
//   //       console.log("response.locations", response.locations);
//   //       // Loop through the array of available locations in the response and add to the map.
//   //       for (const loc of response.locations) {
//   //         //Create an object to hold each location's necessary details
//   //         const locationDetails = {
//   //           lat: loc.latitude,
//   //           lng: loc.longitude,
//   //           title: loc.title,
//   //           description: loc.description,
//   //           center: { lat: loc.center_latitude, lng: loc.center_longitude },
//   //           draggable: true,
//   //           clickable: true,
//   //           animation: google.maps.Animation.DROP,
//   //         };
//   //         // console.log(locationDetails);
//   //         mapLocs.push(locationDetails);
//   //       }

//   //       initMap(mapLocs);
//   //     })

//   //     .fail((xhr, status, error) => {
//   //       console.error("Ajax request failed:", status, error);
//   //     });
//   // }
//   showMapLocations(mapid);
// }); //commented out by mehwish
