// Client facing scripts here
$(()=> {
  $.get("/maps")
  .then((res) =>{
    //console.log(res);
    createMap()
    //google api here?
    //call create map here?
    //jquery load div into body
    //
  })

  console.log("test")



//define createmap function
const createMap = function(){
  const $aMap = $(`
    <div>
      This is a map div. Eventually a map will go here.
    </div>`
  )

  return $aMap

}

const renderMaps = function(placeholder){
  let $aMap = createMap()
  $('.map-container').append($aMap)
}


renderMaps()

})

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
