//Handles script when the user submits a tweet
$(document).ready(function() {
  $("#tweet-post").on("submit", function(event) {
    event.preventDefault() //Prevents page refresh
    let tweetContent = $(this).serialize()
    console.log(tweetContent)
    //Ajax Post request format: $.post(URL,data,callback); 
    $.post("http://localhost:8080/tweets", //URL
      tweetContent, //Data
      (data, status) => { //Callback
        alert("Data: " + data + "\nStatus: " + status);
      })
  });
});