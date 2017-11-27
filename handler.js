'use strict';
const tAction = require("./tweet.actions");

module.exports.saveTheWebBot = (event, context, callback) => {
  //pass in how many retweets you'd like your acccount to do each cycle
  tAction.retweetHashTags(3);
  //pass in how many informational tweets with links you'd like to post each cycle
  tAction.howToFight(3);
  //This function tweets portions of "Do no go gentle into that good night"
  //the first parameter indicates how many tweets you'd like each cycle
  //the second paramter set to true will post the whole poerm
  tAction.rageRageAgainstTheDyingOfTheLight(1, true);
  //pass in how many tweets of a peices of media information on Net Neutrality with activism links
  tAction.tweetMedia(2);
};
