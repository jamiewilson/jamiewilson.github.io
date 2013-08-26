$(document).ready(function(){

  $(function() {
  
    $("button").click(function() {
      $(this).closest('section').fadeTo("500", 0.00, function() { //fade
        $(this).closest('section').slideUp("500", function() { //slide up
          $(this).remove(); //then remove from the DOM
        });
        
      });
    
    });
  
  });
  
});