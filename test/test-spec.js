var httptest = require('httptest');
var errorPropagate = function (err, res) {
    if(err) throw err;
};


describe("the system has a user with id 123", function () {
    console.info('I am setting up user id in the system here...')
    describe("when I request the avatar for user with id 123", function () {
        var result = httptest('http://www.google.com').get();
        it("I should get back an appropriate avatar with valid information about the user with id $id", function () {
            result
                .expectStatus(200)
                .end(errorPropagate);
        });
    });
});