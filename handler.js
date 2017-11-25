'use strict';
const Twit = require("twit");
const T = new Twit(require("./twit.config.js"));

//count Twitter MaxCount
const MAX_COUNT = 200;
const LAST_ID_K = "Last ID";

initBot = (status) => {
  let replyAll = "RT @" + status.user.screen_name + " " + status.text;
  console.log("replyAll: ", replyAll);
  T.post("statuses/retweet/", {
    id: status.user.id
  }, (errU0, dataU0) => {
    if (errU0) {
      console.log("ERROR: ", errU0);
    } else {
      console.log(" response dataU0: ", dataU0);
    }
  });

  setTimeout(() => {console.log("waiting....") }, 10000);
}

module.exports.saveTheWebBot = (event, context, callback) => {
  T.get("search/tweets", {
    q: "#SaveNetNeutrality",
    count: 15
  }, (errN, dataN, resN) => {
    if (errN) {
      console.error(errN);
    } else {
      console.log("dataN: ", dataN);
      for (let status of dataN.statuses) {
        console.log("status: ", status);
        initBot(status);
      }
    }
  });
};