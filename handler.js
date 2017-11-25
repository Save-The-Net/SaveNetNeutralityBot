'use strict';
const Twit = require("twit");
const T = new Twit(require("./twit.config.js"));

//count Twitter MaxCount
const MAX_COUNT = 200;
const LAST_ID_K = "Last ID";

this.initBot = (status) => {
    console.log("status: ", status);
    let tweet = "<Save the net! https://www.battleforthenet.com/>" + " @" + status.user.screen_name + " " + status.text;
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
    q: "#NetNeutrality",
    count: 5
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