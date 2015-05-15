 
Feature: retrieving thumbnail details
  As a client of mango user api
  I want to be able to retrieve user avatars
  So that I can use them to produce enough graphics for the ui

  Scenario: retrieving a single avatar for a single user
    Given The system has a user with id 1234
    When I request the avatar for user with 1234 
    Then I should get back an appropriate avatar with valid information about the user with id 1234

