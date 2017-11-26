'use strict';
const Twit = require("twit");
const T = new Twit(require("./twit.config.js"));

const API = {
    search: (searchTerm, numberToGet) => {
      return new Promise((resolve, reject) => {
        //console.log("searchTerm: ", searchTerm);
        //console.log("numberToGet: ", numberToGet);
        T.get("search/tweets", {
            q: searchTerm,
            count: numberToGet
        }).then(res => {
            //console.log("SEARCH RESPONSE: ", res.data);
            resolve(res.data.statuses);
        }).catch(err => {
            console.error("SEARCH ERROR: ", err);
            reject(err);
        });
      });
    },
    tweet: (botText) => {
      console.log("botText: ", botText);
        T.post("statuses/update", {
            status: botText
        }).then(res => {
            console.log("TWEET RESPONSE: ", res);
        }).catch(err => {
            console.log("TWEET ERROR: ", err);
        });
    },
    retweet: (tweetId) => {
        console.log("tweetId: ", tweetId);
        T.post("statuses/retweet", {
            id: tweetId
        }).then(res => {
            console.log("RETWEET RESPONSE: ", res.data);
        }).catch(err => {
            console.log("RETWEET ERROR: ", err.data.errors);
        });
    },
    retweetAll: (tweetArray, botText) => {
        console.log(tweetArray);
        tweetArray.forEach(tweet => {
            let botTweet = `${botText} @${tweet.user.screen_name} `;
            T.post("statuses/update", {
                status: botTweet,
                in_reply_to_status_id: tweet.id
            }).then(res => {
                console.log("RETWEET_ALL RESPONSE: ", res);
            }).catch(err => {
                console.log("RETWEET_ALL ERROR: ", err);
            });
        });
    },
    retweetAllRotation: (tweetArray, botText) => {
        console.log(tweetArray);
        let botTweet;
        let count = 0;
        let maxCount = botText.length;
        console.log(botText);
        console.log(maxCount);
        tweetArray.forEach((tweet, index) => {
            if (count <= maxCount) {
                botTweet = `${botText[index]} @${tweet.user.screen_name} `;
                count++;
            } else {
                count = 0;
                botTweet = `${botText[0]} @${tweet.user.screen_name} `;
                count++;
            }
            T.post("statuses/update", {
                status: botTweet,
                in_reply_to_status_id: tweet.id
            }).then(res => {
                console.log("RETWEET_ALL_ROTATION RESPONSE: ", res);
            }).catch(err => {
                console.log("RETWEET_ALL ERROR_ROTATION: ", err);
            });
        });
    },
    followOne: (tweet) => {
        T.post("friendships/create", {
            user_id: tweet.user.id,
            follow: true
        }).then(res => {
            console.log("FOLLOW_ONE RESPONSE: ", res);
        }).catch(err => {
            console.log("FOLLOW_ONE ERROR: ", err);
        });
    },
    searchAndRetweet: (hashtags, botText) => {
        console.log(hashtags);
        T.get("search/tweets", {
            q: hashtags,
            count: 5
        }).then(res => {
            console.log("SEARCH RESPONSE: ", res.data);
            API.retweetAll(res.data.statuses, botText);
        }).catch(err => {
            console.error("SEARCH ERROR: ", err);
            return err;
        });
    },
    followAll: (tweetArray) => {
        tweetArray.forEach(tweet => {
            T.post("friendships/create", {
                user_id: tweet.user.id,
                follow: true
            }).then(res => {
                console.log("FOLLOW_ALL RESPONSE: ", res);
            }).catch(err => {
                console.log("FOLLOW_ALL ERROR: ", err);
            });
        })
    }
}

module.exports = API;
