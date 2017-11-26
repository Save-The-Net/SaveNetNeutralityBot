'use strict';
const API = require("./api");

function retweetHashTags() {
  const hashtags = ["#NetNeutrality", "#SaveNetNeutrality", "#BattleForTheNet", "#AjitPaiSucks", "#DefendNetNeutrality", "#SaveTheInternet"];
  for(let i = 0; i < 3; i++) {
    const random = (i === 0) ? 0 : Math.floor(Math.random() * hashtags.length);
    console.log("random: ", random);
    API.search(hashtags[random], 1).then((tweets) => {
      //I found I have to us id_str instead of just id. For some reseaon the two
      //  vars can very. id_str seems to the the original
      if(tweets[0].retweeted_status) {
        API.retweet(tweets[0].retweeted_status.id_str);
      } else {
        API.retweet(tweets[0].id_str);
      }
    }).catch((err) => {
      console.log("ERROR: ", err);
    });
  }
}


module.exports.saveTheWebBot = (event, context, callback) => {


  retweetHashTags();

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
