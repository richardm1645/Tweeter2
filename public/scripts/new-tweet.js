//Handles script when the user submits a tweet
$(document).ready(function() {
  //Changes color of the "Tweet" button on mouseover
  $("#tweet-button").mouseover(function() {
    $(this).css("background-color", "#829bef");
  })
  $("#tweet-button").mouseout(function(){
    $(this).css("background-color", "#4056a1");
  });

  $("#tweet-post").on("submit", function(event) {
    event.preventDefault() //Prevents page refresh
    let tweetContent = $(this).serialize();
    if ($("#tweet-text").val().length < 1) {
      alert("Please enter a valid tweet.");
    
    } else if ($("#tweet-text").val().length > 140) {
      alert("Your tweet is too long.");
    
    } else {
    //Ajax Post request format: $.post(URL,data,callback); 
    $.post("http://localhost:8080/tweets", //URL
    tweetContent //Data
    )}  
    
  });
});