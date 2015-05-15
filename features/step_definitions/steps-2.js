var httptest = require('httptest');

var steps = function () {
 
  this.Given('The system has a user with id $id', function(id, callback) {
    console.info('hello');
    callback();
  });
 
  this.When('I request the avatar for user with $id', function(id, callback) {
    this.current = httptest('http://www.google.com').get();
    callback();
  });
 
  this.Then('I should get back an appropriate avatar with valid information about the user with id $id', function(id, callback) {
    this.current
        .expectStatus(200)
        .end(function(err, res) { if (err) throw err; });
    callback();
  });
};
 
module.exports = steps;
