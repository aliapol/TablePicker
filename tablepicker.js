"use strict";
$(document).ready(() => {
let ogText;
let name;
let table;
let usersName;
    
//when mouse enters the box set name equal to the value of the string(?) inside the DOM element that started the event
  $(".table").on("mouseenter", (event) => {
    name = $(event.target).attr("name");
//set ogText equal to the text of the DOM element that initiated the event. I'm unclear on these two lines
    ogText = $(event.target).text();
      
//something happens and we're setting the text equal to name
    $(event.target).text(name);
      
//when mouse leaves the box set inside text equal to the ogText
  }).on("mouseleave", (event) => {
    $(event.target).text(ogText);
  });
    

//targets the form to hide
$("#resform").css("display", "none"); 

    
//makes the form fade in    
$(".table").on("click", function() {
    $("#resform").fadeIn( "slow", function() {
    // Animation complete.
  }); 
});

//Working on toggling the class    
//$("#submitbtn").on("click", (event) => {
//    usersName = $("#name-id").val();
//    
//    $("#name-id").val(""); table.attr("name", usersName);
//    
//    table.addClass("reserved");
//    $("#resform").hide();
//});
    
    
//Need to figure out how to "release" and "keep" the selected table   
$(".table").on("click", (event) => {
    $(event.target).toggleClass('reserved available');
});
    
    
    
    
$("#submitbtn").on("click", function() {
   $("#resform").fadeOut( "slow", function() {
    // Animation complete.
  });
});
//    
//
$("#clOut").on("click", function() {
   $("#resform").fadeOut( "slow", function() {
    // Animation complete.
  });
});

    

    
    
$(".table").on("mouseenter", (event) => {
    $(event.target).css('background-color', '#ADAAAA');
});
    
$(".table").on("mouseleave", (event) => {
    $(event.target).css('background-color', '#ccc');
}); 
    




    
    
    
});




    





