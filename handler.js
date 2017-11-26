'use strict';
const API = require("./api");


module.exports.saveTheWebBot = (event, context, callback) => {

    let hashtag = "#NetNeutrality";

    API.search(hashtag, 1).then((tweets) => {
      //console.log(tweets);

      console.log("tweets[0].retweeted_status: ", tweets[0].retweeted_status);
      console.log("tweets[0].id: ", tweets[0].id);

      if(tweets[0].retweeted_status) {
        API.retweet(tweets[0].retweeted_status.id);
      } else {
        API.retweet(tweets[0].id);
      }




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
