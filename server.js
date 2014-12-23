// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(env);
var config = require('./config/config')[env];
app.set('views', config.rootPath + '/app/views');
app.set('view engine', 'jade');
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
// routes ==================================================
require('./config/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port); // shoutout to the user

//var config = JSON.parse(fs.readFileSync('properties.json', encoding="ascii"));

//Twitter = require('./lib/twitter');

//console.log(config);

//var twitter = new Twitter(config);

/*
var util = require('util'),
    Twitter = require('./lib/twitter'),
    fs = require('fs');

var config = JSON.parse(fs.readFileSync('properties.json', encoding="ascii"));

    console.log(111);

var twit = new Twitter({
    consumer_key: '3wpG6rCoHVsjXsDUTGLabI54m',
    consumer_secret: 'AnAaLDFaQoPHAl5QXOJ1rmzG2USopDyrgnmCd44SKYhYJkhsaC',
    access_token_key: '1055147588-AY6Srwc7pZTysQq8myhS0Z2XkLiJjFfjPslgU9Q',
    access_token_secret: 'BhLW0KNAhDMugD4A2LZKBJFDdLQpr4MJ5LFUNHF5Mfbbt'
});

console.log(222);

twit.get('/statuses/show/27593302936.json', {include_entities:true}, function(data) {
  console.log(util.inspect(data));
});

console.log(333);
*/

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};

var success = function (data) {
  console.log('Data [%s]', data);
};

/*
twitter.getUserTimeline({"screen_name" : 'cnni', "count" : '1', "hashtags": [ {"text": "ISIS", "indices": [0, 5]}] }, error, function (data) {
  console.log('user time line tweets : ' + data);
});
*/

// twitter.getUserTimeline({
//   "screen_name" : 'cnni',
//   "text": "",
//   "entities": {
//     "hashtags": [
//       {
//         "text": "#ISIS",
//         "indices": [
//           0,
//           5
//         ]
//       }
//     ],
//     "symbols": [],
//     "urls": [],
//     "user_mentions": []
//   }
// }, error, function (data) {
//   //console.dir(data)
// });

// twitter.buildQS('q=from%3ACmdr_Hadfield%20%23nasa');
// twitter.doRequest('https://api.twitter.com/1.1/search/tweets.json', function (error) {
//   console.dir(error);
// }, function (success) {
//   console.log(success);
// });

//https://api.twitter.com/1.1/search/tweets.json?q=from%3Acnni%20%23ISIS

//twitter.getUserTimeline( { screen_name: 'cnni', count: '2', "entities": { "hashtags": [{"text": "ISIS", "indices": [0,5]}] } }, error, success);
//-->twitter.getTweetsByHashTag({from : 'cnni'}, 'ISIS', error, success);

// var userMentionsTimeline = twitter.getMentionsTimeline({ count: '10'}, error, success);
// var userHomeTimeline = twitter.getHomeTimeline({ count: '10'}, error, success);
// var userRetweets = twitter.getReTweetsOfMe({ count: '10'}, error, success); senin netliğini tyerim!! tertemiz :)

