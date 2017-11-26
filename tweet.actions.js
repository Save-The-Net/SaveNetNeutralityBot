'use strict';
const API = require("./api");
const preparedTweets = require("./tweets");

const tweets = {
  retweetHashTags: (hashtags, numberOfRetweets) => {
    /**
    This functions retweets a tweet containing the hashtag randomly selected
      from the list passed to it.
    */

    for(let i = 0; i < numberOfRetweets; i++) {
      const randomHashtag = Math.floor(Math.random() * hashtags.length);
      API.search(hashtags[randomHashtag], 1).then((tweets) => {
        var randomTweet = 0;
        if(tweets.length > 1) {
          randomTweet = Math.floor(Math.random() * tweets.length)
        }
        //If a tweet is a reweet we need the orginal id to reweet it
        //  *I found I have to us id_str instead of just id. For some reseaon the
        //    two vars can very. id_str seems to the the original
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
    for(let i = 0; i < numberOfTweets; i++) {
      API.tweet(preparedTweets.knowledgeTweets[Math.floor(Math.random() * preparedTweets.knowledgeTweets.length)]);
    }
  }
}

module.exports = tweets;
