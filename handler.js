'use strict';
const tAction = require("./tweet.actions");

module.exports.saveTheWebBot = (event, context, callback) => {
  tAction.retweetHashTags(1);
  tAction.howToFight(1);
  tAction.rageTweets(3, true);
};
