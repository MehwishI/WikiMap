// Client facing scripts here
$(()=> {
  $.get("/maps")
  .then((res) =>{
    console.log(res);
  })
})
