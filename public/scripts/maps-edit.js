//FUNCTIONS



//DOCUMENT READY
$(()=> {


  //EDIT BUTTON (embeed in ajax request?
  $('#edit-button').click(function(event){

    //call to single maps api put request that calls two functions
    //one for each query


    //call to get or...hmm....data already on page? how to acces the object?
    //see line 25 on maps.js query file, "getMapById()"
    //this put request may need to put inside a then() of a get request to (get map by id)


    let dataToEdit = {title: "" , center_latitude: "" , center_longitude: "", zoom_level: ""}




    $.put('/', dataToEdit)
    .then((responseData) => {
      console.log("edit put request response data:", responseData)
    })
    .catch((err) =>{
      console.log("put request error response: ", err)
    })




  })

})
