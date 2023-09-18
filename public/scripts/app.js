// Client facing scripts here

//the below is returning json data via console log to api/maps.js
//I think vasilly said $() was short for document ready....

//make a function called loadmap() , call in doc.ready()

$(() => {
  //call loadmaps()

  //put everything here
  //function calls

  $.get("/maps").then((res) => {
    console.log(res);
    createMap();
    //google api here?
    //call create map here?
    //jquery load div into body
    //
  });

  console.log("test");

  //define createmap function

  //rename to rendermaps()
  const createMap = function () {
    const $aMap = $(`
    <div>
      This is a map div. Eventually a map will go here.
    </div>`);

    return $aMap;
  };

  const renderMaps = function (placeholder) {
    let $aMap = createMap(); //rename it to createMapElement()
    $(".map-container").append($aMap);
  };

  renderMaps(); // call it inside the loadMap()
});

// const loadMaps = function(){

//   $ajax({
//     url: '/index.ejs',
//     succes: () => {
//       renderMaps()
//     }
//   })
// }

//loadTweets()

//ajax example from tweeter

// const loadTweets = function() {

//   $.ajax({
//     url: '/tweets',
//     success: (tweets) => {
//       renderTweet(tweets)

//     },
//     error: (err) =>  { console.log(err)}
//   })

// }
