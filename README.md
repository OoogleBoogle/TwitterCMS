#Twitter CMS

### An experiment to see if a website can be updated in real time just using tweets.

#### Concept

The idea stems from my days working in bars and playing in bands. It's hard to find the time to keep a full website updated
with the most upto date news. Hence the idea for this. A website can be linked to the owners Twitter account which will 
display info based on set heshtags from tweets.

The content is currently pulled from tweets from [this](https://twitter.com/UseTweetsAsCMS) account and, using Firebase's 
real time database, updates the content in the website in real time. The backend is constantly connected to the twitter 
account (using the streaming API and Twit module) and, in this case, is listening for 3 specific hashtags, #bands, #updates and #images.  
It also pulls the user name, headline and location from Twitter. This can easily be changed and expanded to fit the needs 
of the user.

#### Issues and Todo's

Need to be able to delete from the DB when deleted from Twitter.

User info is currently re-written with every tweet. Needs to only be when the profile info is updated.

Basic benchmarking put the pulling of all the info from Firebase at just under 1s (literally about 997ms). Need to add some
spinners or loading markers. 

Need some way of ordering results by date (for the #bands tag)

#### Tech Stack

React & Redux

[Firebase](https://firebase.google.com/)

[Twit Module](https://github.com/ttezel/twit)

#### Hosting

Coming Soon....





