//This file had some conflicts with client.js, most likely used as backup
//Handles mouseover functionalities for tweets

$(document).ready(function() {
  //Applies a shadow when hovering over tweet container
  $(".tweet-container").mouseover(function() { 
    alert("foo");
    $(this).css("box-shadow", "10px 10px #c9cbdf");
  });
  $(".tweet-container").mouseout(function(){
    $(this).css("box-shadow", "none");
  });

  //Changes color of the tweet reactions when mousing over
  $(".fa-flag").mouseover(function() {
    $(this).css("color", "#cc9924");
  });
  $(".fa-flag").mouseout(function(){
    $(this).css("color", "#4055a1");
  });
  $(".fa-retweet").mouseover(function() {
    $(this).css("color", "#cc9924");
  });
  $(".fa-retweet").mouseout(function(){
    $(this).css("color", "#4055a1");
  });
  $(".fa-heart").mouseover(function() {
    $(this).css("color", "#cc9924");
  });
  $(".fa-heart").mouseout(function(){
    $(this).css("color", "#4055a1");
  });
});

