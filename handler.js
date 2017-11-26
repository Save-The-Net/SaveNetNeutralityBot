'use strict';
const API = require("./api");


module.exports.saveTheWebBot = (event, context, callback) => {

    let hashtag = "#NetNeutrality";

    API.search(hashtag, 2).then((tweets) => {
      //console.log(tweets);

      console.log("tweets[0].retweeted_status: ", tweets[0].retweeted_status);

      //I found I have to us id_str instead of just id. For some reseaon the two
      //  vars can very. id_str seems to the the original
      if(tweets[0].retweeted_status) {
        console.log("tweets[0].retweeted_status.id_str: ", tweets[0].retweeted_status.id_str);
        API.retweet(tweets[0].retweeted_status.id_str);
      } else {
        console.log("tweets[0].id_str: ", tweets[0].id_str);
        API.retweet(tweets[0].id_str);
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
