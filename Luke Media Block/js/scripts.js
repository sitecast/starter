$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $(".rotate").click(function(){
   $(this).toggleClass("up");
  })
})
