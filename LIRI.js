/*******************
packages & keys
*******************/
require('dotenv').config();
var fs = require('fs');

var keys = require('./keys.js');
var request = require('request');
var client = require('twitter');
var spotify = require('node-spotify-api');

var clientKey = new client(keys.twitter);
var spotifyKey = new spotify(keys.spotify);

var command = process.argv[2];

/*******************
 Variables created to call on appropriate npm functions.
 *******************/
var getTweets = () => {
    if (command === 'my-tweets') {
        console.log('gathering tweets...')
        myTweets();
    }
};
getTweets();

var getSpotify = () => {
    if (command === 'spotify-this-song') {
        console.log('gathering spotify results...');
        spotSearch();
    }
};
getSpotify();

var omdb = () => {
    if (command === 'movie-this') {
        console.log('gathering OMDB results...')
        movie();
    }
};
omdb();

var txt = () => {
    if (command === 'do-what-it-says') {
        console.log('reading from the file...');
        fs.readFile('random.txt', 'utf8', function (err, data) {
            if (!err) {
                console.log(data);
                spotSearch(data);
            }
        });
    }
};
txt();


/*******************
 functions to run npms
 *******************/
function myTweets() {
    //params will hold o ur screen name and the amount of tweets we want to display
    var params = { screen_name: 'Real_M_FreeMan', count: 20 };

    //calling our twitter npm to get our timeline
    clientKey.get('statuses/user_timeline.json', params, function (err, tweets, response) {

        if (!err) {
            console.log(tweets);
        };

    });
};

/****************
Spotify Search
****************/
function spotSearch(search) {
    //this will allow us to enter a song title with spaces.
    var search = process.argv.slice(3).join(' ');
    //if no song is typed in then Ace of Base' 'I Saw The Sign' will be shown by default
    if (!search) {
        search = 'I saw the sign';
    }

    //calling our sotify npm package to perform a search.
    spotifyKey.search({ type: 'track', query: search }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        var songInfo = data.tracks.items;
        console.log("Artist(s): " + songInfo[0].artists[0].name);
        console.log("Song Name: " + songInfo[0].name);
        console.log("Preview Link: " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name);
    });
}

/****************
OMDB search
****************/
function movie(movieSearch) {
    //this will allow us to enter a movie title with spaces.
    var movieSearch = process.argv.slice(3).join(' ');

    //making a variable for our omdb url
    var queryurl = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&apikey=trilogy&r=json&tomatoes=true";

    //if theres nothing typed in the movie search, then this movie will be shown by default.
    if (!movieSearch) {
        movieSearch = "mr+nobody";
    };
    //making a request that calls our queryurl we made earlier
    request(queryurl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('movie name: ' + JSON.parse(body).Title);
            console.log('Year: ' + JSON.parse(body).Year);
            console.log('IMDB: ' + JSON.parse(body).imdbRating);
            console.log('Tomato Rating: ' + JSON.parse(body).Rated);
            console.log('Region: ' + JSON.parse(body).Country);
            console.log('Languages: ' + JSON.parse(body).Language);
            console.log('Plot: ' + JSON.parse(body).Plot);
            console.log('Actors: ' + JSON.parse(body).Actors);
        }
    })
}

//end of main command function



/*******************
How to make this line accept these commands
var command = process.argv.slice(2).join(' ');// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
*******************/
/****************
var input = process.argv.slice(3).join(' ');
should take these
-song name- 
-movie name-
-random.txt-
****************/