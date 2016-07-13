The reducers are split out so i can target individual components with the specific state needed, which makes sense.

The actions, less so. I did them separately as they each need to handle the incoming data slightly differently.
It still could be one monster action file, but would be harder to parseHuman();

The wip.js will let you test that the store is receiving and processing the tweets properly. Just run it
as 'node redux/wip.js' and you'll see what's meant to be in state.

There's a 'start_actions.js' in the action folder. This is so when the application loads in the client, 
it establishes the connection to the DB.

There's no real TODO's here, it should just work....fingers crossed.
