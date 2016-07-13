# Yo Kyle!
### FORK ME YOU **** :wink:

So here's the current state of the app, basic idea is with a tweet you can add content to a webpage.
There's readme's in the lib and redux folders for a breakdown of what's in there.

The build process is slightly faffy. First run the build task, this will look for a /dist folder, so you might
need to create an empty folder if it fails first time. Then nodemon the server.js, which will serve up the
index.html and connect to the twitter and firebase apis. THEN, if you want to play with React,
run the watch:js task. This will rebuild the JS with every change. Haven't set up hot reloading so you'll need to
refresh the browser each time.

Build whatever feature you like dude. Totally up to you. You can faff with React and styling as much as you want,
the current components are just there as placeholders. There's a problem with the images not pulling from the given
url....could be because they're shortened...but they work in a browser.

There's also a bunch of TODOs in the twitter.js... but don't expect you to do anything with that. Unless you want to...

I can add you to the Firebase console, but I'll need your gmail address.

Handy Links

[Twit Module](https://github.com/ttezel/twit)

[An example of redux and firebase, but the syntax is a little outdated.](https://github.com/krawaller/reduxfirebasedemo)

[The Twitter account, I'll email the password if you need it.](https://twitter.com/UseTweetsAsCMS)
