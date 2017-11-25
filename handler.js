'use strict';
const Twit = require("twit");
const T = new Twit(require("./twit.config.js"));

this.initBot = (status) => {
  console.log("STATUS: ", status);
  console.log("----------------------------------------");

  let tweet = "<Save the Net! https://www.battleforthenet.com/>" + " @" + status.user.screen_name + " " + status.text;
  console.log("TWEET: ", tweet);
  console.log("----------------------------------------");

  T.post("statuses/update", {
    status: tweet
  }, (err, res) => {
    if (err) {
      console.log("TWEET ERROR: ", err);
    } else {
      console.log("TWEET RESPONSE: ", res);
    }
  });

}

module.exports.saveTheWebBot = (event, context, callback) => {
    console.log("Hello?");
  T.get("search/tweets", {
    q: "#NetNeutrality",
    count: 5
  }, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      // console.log("SEARCH ERROR: ", dataN);
      for (let status of res.statuses) {
        // console.log("SEARCH RESPONSE: ", status);
        this.initBot(status);
      }
    }
  });
};