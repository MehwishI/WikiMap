// Client facing scripts here

//the below is returning json data via console log to api/maps.js
//I think vasilly said $() was short for document ready....

//make a function called loadmap() , call in doc.ready()

$(() => {
  //call loadmaps()
  console.log(Start)
  $('.new-map').on('click', showCreateMapForm);

  //put everything here
  //function calls


//make load functios instead of below
  // $.get("/maps").then((res) => {
  //   console.log(res);
  //   createMap(); //refers to this function on this page, not the query page, confusing change it
  //   //google api here?
  //   //call create map here?
  //   //jquery load div into body
  //   //
  // });

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

const showCreateMapForm = function(){
  // alert("showing the form")
  $('.create-map-form').removeClass("hidden")

}



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
