/*******************
packages & keys
*******************/
require('dotenv').config();
const fs = require('fs');

const keys = require('./keys.js');
const request = require('request');
const client = require('twitter');
const spotify = require('node-spotify-api');

const clientKey = new client(keys.twitter);
const spotifyKey = new spotify(keys.spotify);

/*******************
Targetting the line where we will type in commands
*******************/
const command = (process.argv.slice(2).join(function () {

    function myTweets() {
        const params = { screen_name: 'Real_M_FreeMan' };
        client.get('statuses/user_timeline.json', params, function (err, tweets, response) {
            if (err) {
                console.log(err)
            };
           
        });
    };
}

//end of main command function
)
);

fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

console.log(clientKey.constructor);
console.log(spotifyKey.constructor)


/*******************
How to make this line accept these commands
const command = process.argv.slice(2).join(' ');// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
*******************/
/****************
const input = process.argv.slice(3).join(' ');
should take these
-song name- 
-movie name-
-random.txt-
****************/