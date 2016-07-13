This is the logic for connecting to twitter over it's streaming API and Firebase.

It separated out here just because it makes more sense, the server file would look crazy otherwise.

The Twitter connection is handled by the 'stream' method in the Twit module - https://github.com/ttezel/twit

TODO's:

twitter.js:

Update user only when twitter profile changed.
  - Currently, it's being setup every time a tweet comes in, there's a profile update event that might work better.

Add more flexibility...allow multiple hashtags and urls
  - Currently it'll only look at the first hashtag within the tweet and branch from there.
    Wondering if there's a way to perform multiple tasks from a single tweet.

Fire off a DM to the user if hashtag not found
  - There's the ability to send DM's using the Twit module. Thinking this could be used to let the account
    owner if theres a problem (disconnects, incorrect hashtag etc..).

Find a way to set up real dates from tweets so they can be sorted on the front end.
  - With the current set up you can't organize the bands by date. I'm thinking if the date is surrounded
    with *'s it can be stripped out with regex and converted to a JS type date.
