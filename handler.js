'use strict';
const API = require("./api");
const tweets = require("./tweets");

function tweetAboutHowToFight() {

  const isps = ["Comcast", "AT&T", "Verzion", "Charter Sprectrum", "Cricket", "CenturyLink", "Sprint", "T-Mobile"];

  const tweets = [
    "Do you really want to start paying " + isps[Math.floor(Math.random() * isps.length)] + " an ADDITION fee just to check your twitter feed? No? Then write and call your representatives now https://www.battleforthenet.com/ and them want to keep #NetNeutrality Then retweet to all your followers!",
    "Tell the White House That You Want To Keep #NetNeutrality! Sign this White House petition and retweet to your followers! https://tinyurl.com/yc5vp5m3 #SaveNetNeutrality",
    "Get Ready, December 7th is the Don't Kill the Net Protest at Verzion stores. You can find one in your area here: http://verizonprotests.com/. Get everyone you know, this isn't a partisan issue. This is keeping the Net an open space for innovation! #NetNeutrality",
    "Only five people at the FCC get to vote on Net Neutrality Repeal. Two plan to vote keep net neutrality. To defeat the net neutrality repeal one of these men MUST change their vote: Ajit Pai: 202-518-7399 Michael O'Rielly: 301-657-9092 Brendan Carr: 202-719-7305 #NetNeutrality",
    "There are several ways to tell the FCC You Want To Keep #NetNeutrality FAX: 1-866-418-0232 CALL: 1-888-CALL-FCC emails for the members planning to vote to dismantle Ajit.Pai@fcc.gov, Mike.O'Rielly@fcc.gov, Brendan.Carr@fcc.gov, and a nice little complaint form: https://www.fcc.gov/ecfs/search/proceedings?q=name:((17-108))",
    "Have you called Congress today? https://www.battleforthenet.com/ Take Action Now Before It's To Late! Call and Retweet to #SaveTheNet #SaveNetNeutrality #NetNeutrality #SaveTheNetBot",
    "Add your own #NetNeutrality Campaign Bot to Your Twitter Account. https://github.com/Save-Net-Neutrality/SaveNetNeutralityBot #SaveTheNet by keeping the word moving while you're on the move, or taking a break. #SaveTheNetBot will help everyone spread info about how to #SaveNetNeutrality and call on your followers to #DefendTheNet"
  ];
  API.tweet(tweets[Math.floor(Math.random() * tweets.length)]);
}


module.exports.saveTheWebBot = (event, context, callback) => {

  const hashtags = ["#NetNeutrality", "#SaveNetNeutrality", "#BattleForTheNet", "#AjitPaiSucks", "#DefendNetNeutrality", "#SaveTheInternet"];
  tweets.retweetHashTags(hashtags, 1);

  tweetAboutHowToFight();

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
