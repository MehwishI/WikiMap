
$(() => {
  //call loadmaps()
  console.log("document ready");
  const $mapsContainer = $('#maps-container');
  console.log("logging maps container", $mapsContainer);

  //declaring the markers list here seems to be causing an stack error
  let markersList = [];

  let map;
  async function initMap() {
    const { Map } = await google.maps.importLibrary('maps');
    map = new Map(document.getElementById("maps-container"), {
      center: { lat: 51.00, lng: 0.221 },
      zoom: 10,
    });

    resetMap(map);
    //addCenterMarker(map)

    //let markersList = [];
    google.maps.event.addListener(map, "click", function (event) {

      // Get the latitude and longitude from the click event
      console.log("click event fired");
      //note, got the lat() and lng() methods from stackoverflow
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      console.log("Latitude: " + lat + "\nLongitude: " + lng);

      //create marker
      const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: "Example marker",
      });

      markersList.push(marker);
      // console.log("Markers list: ", markersList);


    }); //end event listenr
  }//end craete map

  initMap();


  $("#save-map-button").click(function (event) {
    event.preventDefault();
    let mapData = {};

    let title = $('#input-title').val();
    console.log("retrieved title: ", title);

    let center = map.getCenter();

    //hard code the UID as I dont know what it is
    mapData["uid"] = 1;
    //hard code the title until I can figure out how to capture it
    mapData['title'] = title;
    mapData['center_latitude'] = center.lat();
    mapData['center_longitude'] = center.lng();
    mapData['zoom_level'] = map.getZoom();

    //AJAX post request here to create post
    $.post('/api/maps', mapData)
      .then((newMapData) => {

        console.log("Response data: ", newMapData);

        //create and load object with locations to send to route/query

        const dataToLocations = {};

        dataToLocations['title'] = newMapData['title'];
        dataToLocations['description'] = "demo description";
        dataToLocations['map_id'] = newMapData['id'];
        dataToLocations['latitude'] = markersList[0].internalPosition.lat();
        dataToLocations['longitude'] = markersList[0].internalPosition.lng();


        ///---Mentor Nicholas suggested I not do this and instead call the query function addlocations
        //direction in the post handler for create ma) (in the then statement) since we have the  json data right there
        //see line 36 in maps-api.js....not delete the route handler in locations, DO NOT DO THE QUERY CALL

        $.post('/api/locs', dataToLocations)
          .then((newFavouritesData) => {
            console.log("new favourites returned data", newFavouritesData);
          }).catch((error) => {
            console.log("Error messge from post to locations", error);
          });

      })
      .catch((error) => {
        console.log("UNsuccesful post reques to create route", error);
      });
  }); //end save map button

  //WORKS ONLY ON INITIAL MAP NOT RESET MAP
  // const addCenterMarker = function(map){
  //   let center = map.getCenter();
  //   new google.maps.Marker({
  //     position: center,
  //     map: map,
  //     title: "Center Marker",
  //   });
  // }

  // const addMarker = function (latLng) {

  //   new google.maps.Marker({
  //     position: latLng,
  //     map: map,
  //     title: "My magic marker",
  //   });

  // };


});//end document ready


//create new localized map
const resetMap = function (map) {

  // const map = new google.maps.Map(container, {zoom: 5})

  //find current location
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const center = { lat: lat, lng: long };
    map.setCenter(center);
    //addCenterMarker(map)

  });

  return map;

};

//function to add event listener to map object

// google.maps.event.addListener(map, 'zoom_changed', function() {
//   var zoom = map.getZoom();
//   return zoom
// });


// const addEventListeners = function (map){

// }


// //old code below.

// $(document).ready(() => {

//   //current the create maps get route renders the create maps page. I need to change this to render the index but add a form and create button
//   //is this caling the route
//   $.get("/").then((res) => {
//     console.log("main page loaded via jquery");
//     let $createMapButton = createMapButton();
//     let $titleForm = createTitleForm();


//     $('#mapControlsContainer').append()
//     //I need to create a controls containter/div below the  map container to append these to
//     // const createMapButton = function () {
//     //   const $aButton = $(`<button>Create Map<button>`)
//     // }
//     //need to append the button to a specific element, which one
//     return $aButton;



//   });

//   $.get("/").then((res) => {
//     console.log("create form");
//     //need to know which element to append this to
//   });

//   //creatmap button function
//   const createMapButton = function () {
//     const aButton = $(`<button class"button" id="createMapButton">Create Map<button>`);
//     return aButton;
//   };
//   c;
//   const createTitleForm = function () {
//     const titleForm = $(`
//   <form class="mapTitle" id="mapTitle>
//   <label for="maptitle">Enter a title for your map</label>
//   <form>`);

//     return titleForm;
//   };


// }); //end document ready

//STEP 1, GENERATE A HARD CODE MAPE

//generate map based on device position




// const generateStartMap = function init(map) {
//   let location = { lat: 48.442954, long: -89.220905 };
//   //let map = new google.maps.Map(document.getElementById(#))
//   const $mapsContainer = $('#maps-container');
//   let $startMap = new google.maps.Map($mapsContainer, {
//     zoom: 4,
//     center: location
//   });

//   //GOOGLE_MAPS_API_KEY=AIzaSyBTlH2zUp3AWtcEogHcP0Y28fjxX_2Gv0k
//   //grab map, append to mapscontainer .....

// };


// //STEP 2 append map
// //step 3, add geolocation


// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     //       // Get the latitude and longitude from the position object
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let location = { lat: latitude, lng: longitude };
//     position: { lat: latitude, lng: longitude; },
//     // Update the HTML elements with the latitude and longitude
//     // document.getElementById("latitude").textContent = latitude;
//     //document.getElementById("longitude").textContent = longitude;
//   });
// } else {
//   alert("Geolocation is not supported in your browser.");
// }

// ////------------------------------------------/////
// //Jeremy  (
// //load up map by device location
// //get click event data from user
// //save data
// //send to db create map route/function
// //refresh?)


// //Client facing script, displays the list of all available maps

// // Initializes the google map API and displays it in the div container


// // let location = ""

// // // get gelocation from browser



// //load map using geolocation coordinates
// // function initMap(location, mapId) {

// //   const map = new google.maps.Map(document.getElementById(mapId), {
// //     zoom: 7,
// //     center: location
// //   });

// //   const marker = new google.maps.Marker({
// //     position: location,
// //     map: map
// //   });
// // };


// // This code runs when the DOM is ready
// // $(() => {

// //   // //const $createMapContainer = $('#create-map-container');

// //   // // Make an AJAX (asynchronous) GET request to the '/api/maps' endpoint on the server.
// //   // $.ajax({
// //   //   method: 'GET',
// //   //   url: '/api/maps'
// //   //   //jeremy, I had the wrong ajax call
// //   // })
// //   // .done(() => {
// //   //   // When the AJAX request is successful, this callback function is executed.
// //   //   console.log("Calling Ajax");
// //   //   //initMap(location)

// //     //$createMapContainer.empty();  // Empty the content of the 'maps-container' div.

// //     // Loop through the array of available maps in the response and create a map for each.
// //     // for (const map of response.maps) {

// //     //   // Create a new map container with a unique ID based on the map's ID.
// //     //   const mapId = `map-${map.id}`

// //     //   //THIS NEEDS TO BE UPDATE JEREMY TO JEREMY
// //     //   const eachMapContainer = $(`<div id="${mapId}" class="map"><a href="/api/locs/${map.id}"> View map </a></div>`);

// //     //   // Append the each map's container to the 'maps-container' div.
// //     //   $($createMapContainer).append(eachMapContainer);

// //     //   // Define the location for each map
// //     //   const location = { lat: map.latitude, lng: map.longitude };

// //     //   // Call the initMap function to initialize the Google Map for this location
// //     //   initMap(location, mapId);
// //     // }
// //   });

// //  });





// //get user event data from api




// //send to database via post



