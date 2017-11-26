Join The Battle to Save The Net!
======

## Help Keep the Internet Free and Open, Turn Your Twitter Acccount Into a Net Neutrality Campaign Bot
SaveNetNeutralityBot
------



#### Let's Save Our Internet from turning into this![this](http://www.4kshooters.net/wp-content/uploads/2014/06/netneutralpricing2.jpg)




CrashOverride and I setup this weekend planning to make an Twitter bot army to inform everyone what disolving Net Neutrality will do to our beloved internet. Twitter bots are free to make, and using aws Lambda as your server gives you 1 million free requests a month. After that it's still only 20 &#162; per million. Twitter's tweet limit is 15 tweets every 15 minutes. So we figured we could get about 15 million+ tweets out informing and campaigning to keep Net Netruality. We don't know if it will be enough, or do anything, but we have to try. Being new to bot making, we quickly found out that our bots got shut down quickly. Twitter's automation kept flagging our bots. We hit the stumbing block and we weren't sure how'd we keep any bot alive long enough for it to be worth the effort of deploying it. We decided to finally read Twitter's rules regarding bots. Apparently tweeting at people who aren't your followers is no no if do it to may times as a bot, you can no longer post as a bot. We weren't sure how to get around this in order to get the word out. Then an idea hit us, what if we turned our personal Twitter accounts into bots?

The accounts have been established for years, so using them to tweet and encourage activism seem like the solution. Not quite the scale we were hoping for, but maybe we could get some retweets, or maybe we can get our friends to do it too?! Twitter bots are pretty much free with an aws account. If we wrote a bot that was easily configurable, we could share it with our friends who could also tweet to their friends. Next step seemed obvious, let's put out a basic campaign bot that tweets about Net Neutrality, tweets links to [Battle for the Net](https://www.battleforthenet.com/), the [December 7th Protests](http://verizonprotests.com/), retweet trending tweets concerning #NetNeutrality, and rally calls for activism. We'd make it as easily configurable as possible, and try to write the best documentation to help even the most junior programmer with a credit card a chance to the launch a Net Neutrality Campaign Bot to help save the Net! This is that attempt, we hope you'll join us and help accomplish our goal. Hack the Planet!

## Let's Get Setup!

* [Setting Up Your Twitter Bot][1]
* [Install Node][2]
* [Install Serverless][3]
* [Install-and-Configure-Git][4]
* [OK-Let's-Wire-It-Up!][5]
* [AWS-Setup][6]
* [Activate-the-Bot][7]
* [The-Plan][8]


## Setting-Up-Your-Twitter-Bot
  
This is pretty straight forward. Login into your twitter account. After you login go to https://apps.twitter.com then click on the button that says _Create New App_. On the next screen you'll be prompted to name your app, give it a description, and it's website. The name and description are local to your account and just use your twitter profile url as your website. It confirm and there you go. Your bot is ready. Let's set up your local environment and get you an aws account.
  
## Install-Node
  
If don't already have NodeJS installed, go [here](https://nodejs.org/en/) to download and install. To verify installation open your terminal and type `node -v`. If a version is displayed the installation was a success. Do the same with npm with `npm -v`.
  
## Install-Serverless
  
Inside you terminal type `npm i -g serverless`.

## Install-and-Configure-Git

Install [Git](https://git-scm.com/downloads). Then inside your terminal do [this](https://help.github.com/articles/setting-your-username-in-git/) and [that](https://help.github.com/articles/setting-your-commit-email-address-in-git/).

## OK-Let's-Wire-It-Up!

Clone this repository and run `npm install`. 

Take your Consumer Key, Cosumer Secret, Access Token, and Access Token Secret and enter in the temp.twit.config file. Then rename that same you entered your keys into, to twit.config. If you're using a repo make sure it's still on the .gitignore file because you do not want to commit that info.

Now in your terminal if you type `npm start` the bot should execute locally. Once we get setup with AWS you can launch this puppy!

## AWS-Setup

Sweet! Now we're working locally. Let's take this bot live. First get an aws account setup, and then install the awscli.

Sign up for [AWS](https://portal.aws.amazon.com/billing/signup#/start).

Next you'll need to install [python](https://www.python.org/downloads/) in order to install awscli. You won't need to know any python to deploy this bot, the awscli runs on it. Type `pip --version` to verify installation.

After python has be successfully installed, you can use python's package manager to install awscli by typing `pip install awscli` in your terminal. After that you'll configure need configure it following these [instructions](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).

After this is done you're ready for deployment!

## Activate-the-Bot

Once you're ready, open your terminal and type `npm run deploy`. Your bot with be deployed to aws's Lambda and will wake up and perform it's function on the intervals set in the serverless.yml file. You've now successfully launched your own Net Neutrality campaign bot! 



## The-Plan

Now that your bot is working, go to your lambda's settings in your browser and temporarily disable it's trigger. Keep the bot ready to launch. The first wave begins at 6:00 A.M. EST, the second should follow at 5:30 A.M. MST, and third at 10:00 A.M. WST. In theory no account is violating terms of service, because you only contacting your followers and have long term base build by being a Twitter user. This bot will help you solidify your stance for Net Neutrality. There's no reason to fear that your account will get banned from twitter either! The worst case scenario is that your bot is no longer able to tweet. You can still tweet through your app or browser. Our goal with this bot is to gain visiblity for Net Neutrality while following Twitter's terms and services.




[1]: #Setting-Up-Your-Twitter-Bot
[2]: #Install-Node
[3]: #Install-Serverless
[4]: #Install-and-Configure-Git
[5]: #OK-Let's-Wire-It-Up!
[6]: #AWS-Setup
[7]: #Activate-the-Bot
[8]: #The-Plan
