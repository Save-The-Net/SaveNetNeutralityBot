'use strict';
const Twit = require("twit");
const T = new Twit(require("./twit.config.js"));

//count Twitter MaxCount
const MAX_COUNT = 200;
const LAST_ID_K = "Last ID";

this.initBot = (status) => {
    console.log("status: ", status);
    console.log("----------------------------------------");
    console.log("user_mentions: ", status.entities.user_mentions);
    let mentions = status.entities.user_mentions;
    let retweetList = "";
    mentions.forEach((n) => {
        console.log(n);
        retweetList = retweetList + " @" + n.screen_name;
    });
    console.log("----------------------------------------");
    console.log(retweetList);
    retweetList = retweetList + " @" + status.user.screen_name;
//   let tweet = "Go Here to learn more about saving theweb! @" + status.user.screen_name + " " + status.text;
    let tweet = "Go Here to learn more about saving theweb! " + retweetList;
  console.log("tweet: ", tweet);
  console.log("----------------------------------------");
  T.post("statuses/update", {
    status: tweet
  }, (errU0, dataU0) => {
    if (errU0) {
      console.log("ERROR: ", errU0);
      console.log("----------------------------------------");
      console.log(errU0.twitterReply.errors);
    } else {
      console.log(" response dataU0: ", dataU0);
    }
  });

//   setTimeout(() => {console.log("waiting....") }, 10000);
}

module.exports.saveTheWebBot = (event, context, callback) => {
    console.log("Hello?");
  T.get("search/tweets", {
    q: "#NNBTest",
    count: 1
  }, (errN, dataN, resN) => {
    if (errN) {
      console.error(errN);
    } else {
    //   console.log("dataN: ", dataN);
      for (let status of dataN.statuses) {
        // console.log("status: ", status);
        this.initBot(status);
      }
    }
  });
};