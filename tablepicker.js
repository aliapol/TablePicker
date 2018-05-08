"use strict";
$(document).ready(() => {

$("#resform").css("display", "none"); //targets the form to hide

$(".table").on("click", function() {
    $("#resform").css("display", "block"); 
});
    
$("#submitbtn").on("click", function() {
   $("#resform").css("display", "none")
   
});

$("#clOut").on("click", function() {
   $("#resform").css("display", "none") 
});

    
//Need to figure out how to "release" the selected table if I don't hit save   
$(".table").click(function(){
    $(this).toggleClass('reserved available');
});

/*I need to use the "this" method to target just one circle for reserved/available thing but I also need to use this for the mouseenter/leave function. Not sure how to resolve. Requires more google

$(".table").mouseenter(function() {
   $(this).css('background-color', '#ADAAAA');
});

$(".table").mouseleave(function() {
   $(this).css('background-color', '#ccc');
});*/

    
});




