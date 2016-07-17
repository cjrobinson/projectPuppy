$(document).on('scroll', function(){
  if ($(document).scrollTop() !== 0) {
    $('.navbar').css("background-color", "rgba(51,214,148, .7)");
    console.log($(document).scrollTop());
  } else if($(document).scrollTop() === 0){
    $('.navbar').css("background-color", "rgba(51,214,148, .0)");
    $('navbar li a:hover').css("border", "1px white solid");
    console.log('wtf');
  }
});
