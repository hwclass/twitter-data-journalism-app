var fs = require('fs');
var Tweeter = require('../../lib/twitter');

console.log('tweet controller');

exports.getTweetsByHashTag = function(req, res) {

  console.log('tweet controller getTweetsByHashTag');

  var twitter = new Tweeter({
    "consumerKey": "3wpG6rCoHVsjXsDUTGLabI54m",
    "consumerSecret": "AnAaLDFaQoPHAl5QXOJ1rmzG2USopDyrgnmCd44SKYhYJkhsaC",
    "accessToken": "1055147588-AY6Srwc7pZTysQq8myhS0Z2XkLiJjFfjPslgU9Q",
    "accessTokenSecret": "BhLW0KNAhDMugD4A2LZKBJFDdLQpr4MJ5LFUNHF5Mfbbt",
    "callBackUrl": "/"
  });

  console.log('tweet controller 222' + twitter);

  var result = {};

  twitter.getTweetsByHashTag({from : 'cnni'}, 'ISIS', function(err) {
    result = err;
  }, function (data) {
    console.log('tweet controller getTweetsByHashTag success');
    result = data;
    console.log(result);
  });
  
  res.json(result); // return all tweets in JSON format

};