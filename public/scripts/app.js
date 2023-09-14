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
})


const createMap = function(){
  const $aMap = $(
    <div>
      This is a map div. Eventually a map will go here.
    </div>
  )

  $('.main-container').append($aMap)


}


