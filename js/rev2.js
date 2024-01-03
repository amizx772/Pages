/* global $, alret, console */
$(document).ready(function()
{
   'use strict';
   
   // make the header height equal window height
   $('header').height($(window).height());
   // make the window height in resize equal header height
   $(window).resize(function()
   {
    $('header').height($(window).height())
    $("header .overlay  .slider  div").css("paddingTop",($(window).height() - $('header .overlay  .slider  div').height()) / 2)
   });

   
  
   // self invoke for the first letter brand
   
   


  (function letter ()
  {


    $("nav .brand h2 span").fadeOut(3000,function()
    {
        $(this).fadeIn(3000)
        letter()
    })



    
    }());
   
// make the class transfer between list item 
$('nav .links ul li a ').click(function()
{
  $(this).parent().addClass('active').siblings().removeClass('active')
});
// trigger THE SLIDER
$('.slider').bxSlider();
// make the slider align center
$('header .overlay  .slider  div').each(function()
{
  $(this).css("paddingTop",($(window).height() - $('header .overlay   .slider  div').height()) / 2)
});
//make the static smoth scroll
// $('nav .links ul .serv').click(function()
// {
//   $('html, body').animate(
//     {
//       scrollTop : $('#ser').offset().top + 1
//     },1500)
// });

//make the dynamoc smoth scroll
$('nav .links ul li a').click(function()
{
  $('html, body').animate(
    {
      scrollTop : $("#" + $(this).data("value")).offset().top + 1
    },1500)
});


//make the self invoke 
(function autoSlider ()
{
  'use strict'
  //make chose the  selector 
  $(".t-slider .active").each(function ()
  {
    if(!$(this).is(':last-child'))
    {
      $(this).delay(3000).fadeOut(2000,function()
      {
        $(this).removeClass('active').next().addClass('active').fadeIn()
        autoSlider();
      })
    }
      else  {
        $(this).delay(3000).fadeOut(2000,function()
        {
          $(this).removeClass('active');
          $(".t-slider div").eq('0').addClass('active').fadeIn()
          autoSlider();
        })
      }
    
  })

}());

$('.our-projects ul li').click (function()
{
  $(this).addClass('selected').siblings().removeClass('selected')
});
// trigger nice scroll
$("html").niceScroll(
  {
    cursorcolor : "#4b8f83",
    cursorwidth : "10px",
    cursorborder : "1px solid #4b8f83",
    cursorborderradius : 0



  });
});
var mixer = mixitup('.conta');
