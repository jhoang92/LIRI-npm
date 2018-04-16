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
var value = process.argv.slice(3).join(' ');

/*******************
 Variables to call needed npmFunctions
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
        console.log('gathering spotify results...')
        spotSearch();
    }
};
spotSearch();
this.omdb = () => {
};

this.txt = () => {
};


/*******************
 functions to run npms
 *******************/
function myTweets() {
    var params = { screen_name: 'Real_M_FreeMan', count: 20 };

    clientKey.get('statuses/user_timeline.json', params, function (err, tweets, response) {

        if (!err) {
            console.log(tweets);
        };

    });
};


function spotSearch(value) {

    if (!value) {
        value = 'purple rain';
    }
    spotifyKey.search({ type: 'track', query: value }, function (err, data) {
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