"use strict";
$(document).ready(() => {

    //const paragraphs = document/querySelectorAll(".text"); //this is the Javascript way to do it
    
    //const paragraphs = $(".text");//this is the jQuery way to select all classes of "text" and declare it as the variable "Paragraphs"
    
    const div = $("div");
    //div.fadeIn(5000);
    div.show();
    
   div.css("background-color", "pink").css("margin", "0 auto").css("width", "500px").css("height", "200px");
//chaining 
    
    div //a cleaner way to chain
        .css("background-color", "pink")
        .css("margin", "0 auto")
        .css("width", "500px")
        .css("height", "200px") //semicolon ends statement so it goes on the last one
        .show(); //can also add the show etc like on line 10 
    
    
    
   // $(".text").hide();//target the element called text and run the method called hide
    const btn = $("#btn"); //target the button
    btn.text("This is awesome!!!"); //change the text on the button
    btn.click(() => {
      // console.log($(".input-one").val());
      //console.log($(".input-two").val());  
      //console.log(inputs[0].val()); //This wasn't working but we were attempting to target inputs variable at 0 index and logging value of it. We used the above console.logs instead to get output of cat dog
       
        
//creating an element in jQuery:
    const info = $("<div>");//declare a variable then use <> to create an html element
    info.html(`
        <p>${$(".input-one").val() + $(".input-two").val()}</p>
        <button type="button" class="delete">Delete</button>
`); //when button (above btn.click) is clicked, find the parent elements ID and if the ID is Adam make an alert
    info.attr("first-name", "Adam"); //set an attribute (first name (this is a made up attribute, can have any value)) and give it a value (Adam). Might need this for lab
    console.log(info);
    div.append(info); //selecting our variable (div) and add it in to the div
    });
    
// Select entire document so Anywhere we click on the document will run this function...
  // This is used to keep events attached to our newly appended items
  $(document).click((e) => {
    // If the element we are clicking on has a class of delete...
    if ($(e.target).hasClass("delete")) {
      // If the parent of the element has an attribute of "customer-id" that is the same value as "Adam"...
      if ($(e.target).parent().attr("customer-id") === "Adam") {
        // Alert this string.
        alert("Awesome");
      }
    }
  });
    

    
    console.log(btn.text());
    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log("Sup? It's jQuery"); //when our document is fully loaded it will execute this function (everything inside {})
});



/*Notes from in-class project




*/



