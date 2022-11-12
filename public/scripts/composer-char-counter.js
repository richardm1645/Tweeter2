$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let value = $(this).val().length;
    let charCount = 140 - value /*Max char count is 140*/
    $(this).parents().children().find($(".counter")).html(charCount);
    if (charCount < 0) {
      $(this).parents().children().find($(".counter")).css("color", "red")
    } else {
      $(this).parents().children().find($(".counter")).css("color", "#545149")
    }
  })
});

