//JS for the character counter on new tweets
$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    
    let value = $(this).val().length;
    let charCount = 140 - value; /*Max char count is 140*/
    
    //Finds the parents of #tweet-text, then finding the "counter" class from its children
    $(this).parents().children().find($(".counter")).html(charCount);
    if (charCount < 0) {
      //Character counter is red if it is exceeded
      $(this).parents().children().find($(".counter")).css("color", "red");
    } else {
      $(this).parents().children().find($(".counter")).css("color", "#545149");
    }
  });
});

