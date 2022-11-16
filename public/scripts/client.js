/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
        ${tweetObject.content.text}
      </p>
    <footer>
      <p>${tweetObject.created_at}</p>
      <div class="tweet-container-footer-reactions">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>          
    </footer>
  </article>
  `
  return tweetHTML;
}

//Calls all the tweets in the data and appends them onto the page
const renderTweets = function(tweets) {
  let tweetContainers = '';
  //Loops through all the tweet profiles in the database array
  for (const tweet of tweets) {
    tweetContainers += createTweetElement(tweet);
    tweetContainers += "\n";
  }
  return tweetContainers;
}

$(document).ready(function() {
  //Appends all the tweets from the data to the main container
  $('.container').append(renderTweets(data)); 
});