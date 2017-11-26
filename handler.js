'use strict';
const API = require("./api");
const tAction = require("./tweet.actions");



module.exports.saveTheWebBot = (event, context, callback) => {

  const hashtags = ["#NetNeutrality", "#SaveNetNeutrality", "#BattleForTheNet", "#AjitPaiSucks", "#DefendNetNeutrality", "#SaveTheInternet"];
  //tAction.retweetHashTags(hashtags, 1);

  tAction.howToFight(1);

    //console.log("tweets: ", tweets);

    //API.retweet(tweets.statuses[0].id);


    // Hastag array to search
    // let hashtags = ["#NetNeutrality", "#SaveNetNeutrality", "#battleForTheNet"];
    // let botText = "<Save the Net! https://www.battleforthenet.com/>";
    // let botTextArray = ["<Save the net! https://www.battleforthenet.com/>", "<Do your part! https://www.battleforthenet.com/>", "<Spread the word! https://www.battleforthenet.com/>"];
    //
    //
    // API.searchAndRetweet(hashtags, botText);

    // let searchResults = API.search(hashtags);
    // API.followAll(searchResults);

};
