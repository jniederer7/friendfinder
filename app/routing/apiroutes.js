var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

// Sets up routing for server app
// ============================================================
var router = express.Router();

router.post('/api/friends', function(req, res){

	console.log(req);
	
	var newSurvey = req.body;

	console.log(newSurvey);

	friends.addFriend(newSurvey);

});

router.get('/api/friends', function(req, res){
	res.json(friends.friendsArray);
});

module.exports = router;
