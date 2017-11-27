'use strict';
const API = require("./api");
const preparedTweets = require("./tweets");

const tweets = {
  retweetHashTags: (numberOfRetweets) => {
    for(let i = 0; i < numberOfRetweets; i++) {
      const randomHashtag = Math.floor(Math.random() * preparedTweets.hashtags.length);
      API.search(preparedTweets.hashtags[randomHashtag], 1).then((tweets) => {
        var randomTweet = 0;
        if(tweets.length > 1) {
          randomTweet = Math.floor(Math.random() * tweets.length)
        }
        // I found I have to us id_str instead of just id. For some reseaon the
        //  two vars can very. id_str seems to the the original
        if(tweets[randomTweet].retweeted_status) {
          API.retweet(tweets[randomTweet].retweeted_status.id_str);
        } else {
          API.retweet(tweets[randomTweet].id_str);
        }
      }).catch((err) => {
        console.log("ERROR: ", err);
      });
    }
  },
  howToFight: (numberOfTweets) => {
    if(numberOfTweets > preparedTweets.knowledgeTweets.length) {
      numberOfTweets = preparedTweets.knowledgeTweets.length;
    }
    for(let i = 0; i < numberOfTweets; i++) {
      API.tweet(preparedTweets.knowledgeTweets[Math.floor(Math.random() * preparedTweets.knowledgeTweets.length)]);
    }
  },
  rageRageAgainstTheDyingOfTheLight: (numberOfTweets, all) => {
    if(all) {
      numberOfTweets = preparedTweets.rageTweets.length;
    } else if(numberOfTweets > preparedTweets.rageTweets.length) {
      numberOfTweets = preparedTweets.rageTweets.length;
    }
    for(let i = 0; i < numberOfTweets; i++) {
      if(all) {
        API.tweet(preparedTweets.rageTweets[i]);
      } else {
        API.tweet(preparedTweets.rageTweets[Math.floor(Math.random() * preparedTweets.rageTweets.length)]);
      }
    }
  },
  tweetMedia: (numberOfTweets) => {
    if(numberOfTweets > preparedTweets.mediaTweets.length) {
      numberOfTweets = preparedTweets.mediaTweets.length;
    }
    for(let i = 0; i < numberOfTweets; i++) {
      API.tweet(preparedTweets.mediaTweets[Math.floor(Math.random() * preparedTweets.mediaTweets.length)]);
    }
  }
}

module.exports = tweets;
