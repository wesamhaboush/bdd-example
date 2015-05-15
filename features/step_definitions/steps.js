var request = require('sync-request');

var steps = function () {
 
  this.Given('The system has a user with id $id', function(id, callback) {
    console.info("I am going to insert a user with id $id into the database here" + id);
    this.givenVar = 'test given var';
    callback();
  });
 
  this.When('I request the avatar for user with $id', function(id, callback) {
    console.info("I am going to make a frisby rest api call here" + id);
//    console.info("in when i can see given " + this.givenVar);
    this.result = request('GET', 'http://www.google.com');
    callback();
  });
 
  this.Then('I should get back an appropriate avatar with valid information about the user with id $id', function(id, callback) {
    console.info("I am going to write code here to verify the json I got is good or whatever" + id);
    if(!this.result){
	throw new Error('avatar could not be retrieved');
    }
    callback();
  });
};
 
module.exports = steps;
