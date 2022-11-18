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
    $("<div>").text(tweetContent);
    
    //Form validation: Can't post if the form is empty or > 140 characters
    if ($("#tweet-text").val().length < 1) {
      //Change the HTML and Makes the error element visible
      $(".error-element-text").html("Please enter a valid tweet.");
      $(".error-element").css({"display": "inherit"});
    
    } else if ($("#tweet-text").val().length > 140) {
      $(".error-element-text").html("Your tweet exceeds 140 characters.");
      $(".error-element").css({"display": "inherit"});
    
    } else {
      //Success! Erase the error if there is one, post the content via Ajax
      $(".error-element").css({"display": "none"});
      $.post("http://localhost:8080/tweets", 
      tweetContent) 
      //Load all tweets, including the one just added
      .then( () => { 
        loadTweets() //from client.js
      }) 
    }  
  });
});