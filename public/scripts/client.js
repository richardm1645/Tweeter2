/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Escape function to avoid unwanted characters
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Turns an object-like set of data to HTML
const createTweetElement = function(tweetObject) {
  let tweetHTML = `
    <article class="tweet-container">
    <header>
      <div class="tweet-container-name">
        <img src=${tweetObject.user.avatars} class="tweet-container-avatar"></img>
      <h1>${tweetObject.user.name}</h1>
      </div>
      <h1 class="tweet-container-handle">${tweetObject.user.handle}</h1>
    </header>
      <p class="tweet-container-body">
        ${escape(tweetObject.content.text)}
      </p>
    <footer>
      <p>${timeago.format(tweetObject.created_at)}</p>
      <div class="tweet-container-footer-reactions">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>          
    </footer>
  </article>
  `
  return tweetHTML;
};

//Calls all the tweets in the data and appends them onto the page
const renderTweets = function(tweets) {
  let tweetContainers = '';
  //Loops through all the tweet profiles in the database array
  for (let i = tweets.length - 1; i >= 0; i--) {
    tweetContainers += createTweetElement(tweets[i]);
    tweetContainers += "\n";
  }
  return tweetContainers;
};

//Appends all the tweets so far into the main container
const loadTweets = function() {
  $.ajax({
    url: "http://localhost:8080/tweets",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      //Replaces the container of tweets with updated ones
      $('.tweets-list').empty();
      $('.tweets-list').append(renderTweets(res)); 
    }
  });
};

//Upon server bootup, display the initial tweets
$(document).ready(function() {
  loadTweets();
});

