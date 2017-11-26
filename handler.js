'use strict';
const API = require("./api");


module.exports.saveTheWebBot = (event, context, callback) => {

    let hashtag = "#NetNeutrality";

    API.search(hashtag, 1).then((tweets) => {
      console.log("tweets: ", tweets);
    }).catch((err) => {
      console.log("ERROR: ", err);
    });

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
