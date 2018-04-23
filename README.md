# LIRI-npm
Made for week 10 of Denver University Coding BootCamp, LIRI(Language Interpretation and Recognation Interface) is a command line node app that will be able get information from Twitter, OMDB, and spotify. The application can do the following commands:
<br>
  `my-tweets
  spotify-this-song (insert song name)
`<br>
  `movie-this (insert movie name)
  `<br>
  `do-what-it-says (grabs info from the default text file.)`

# How To
download this repo.<br>
npm install twitter, node-spotify-api, and request.<br>
setup .env file.(refer to the instructions below)<br>
run node LIRI.js and input one of the commands above.<br>

# Twitter
will display the last 20 tweets that have been made.

# OMDB
Will display information of any movie that is searched for. Information thats displayed will include:<br><br>
  `Title of the movie
`<br>
  `Year the movie came out.
`<br>
  `IMDB Rating of the movie.
`<br>
  `Rotten Tomatoes Rating of the movie.
`<br>
  `Country where the movie was produced.
`<br>
  `Language of the movie
`<br>
  `Plot of the movie. 
`<br>
  `Actors in the movie.
`<br>

# Spotify 
Will display any content based on songs that are searched for. Information thats displayed will include:<br><br>
  `Artist(s)
`<br>
  `The song's name.
`<br>
  `A preview link of the song from Spotify.
`<br>
  `The album that the song is from.
`<br>
 
# .ENV file setup
_You can use the code below in your ENV File. Fill in your keys and secrets in the fields needed.
<br>
 `Spotify API keys
`<br>
<br>
`SPOTIFY_ID=ADD SPOTIFY ID
`<br>
 `SPOTIFY_SECRET=ADD SPOTIFY SECRET
`<br>
 `Twitter API keys
`<br>
<br>
 `TWITTER_CONSUMER_KEY=ADD TWITTER KEYS
`<br>
 `TWITTER_CONSUMER_SECRET=ADD TWITTER SECRET
`<br>
 `TWITTER_ACCESS_TOKEN_KEY=	ADD TWITTER TOKEN KEYS
 `<br>
 `TWITTER_ACCESS_TOKEN_SECRET=ADD TWITTER TOKEN SECRET`
