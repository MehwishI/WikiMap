//Client facing script, displays the list of all favourite maps of user

 // This code runs when the DOM is ready, i.e., when the page is fully loaded.
$(() => {

   // Make an AJAX (asynchronous) GET request to the '/api/favs' endpoint on the server.
    $.ajax({
      method: 'GET',
      url: '/api/favs'
    })
    .done((response) => {
      // When the AJAX request is successful, this callback function is executed.
      const $favsList = $('#favs'); //assigns the element with id 'favs' from fav.ejs to a variable
      $favsList.empty();  // Empty the content of the 'favs' element.

      // Loop through the array of favourite maps in the response and create a list item for each.
      for (const fav of response.favourites) {
        // Create a new list item element with a class 'fav' and set its text content to the location_title.
        $(`<li class="user-favs">`).text(fav.location_title).appendTo($favsList);
      }
    });
  });

