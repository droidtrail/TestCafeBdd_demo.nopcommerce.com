Feature: Registration Feature

    As a visitor I can create a new account by the registration feature

Scenario: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And I enter First Name "test"
And I enter Last Name "test2"
And I select Date of Birth "5"
And I select Month of Birth "November"
And I select Year of Birth "1987"
And I enter Email "test@test.com"
And I enter Password of Birth "123456"
And I enter Confirm Password "123456"
And I click register button
Then successfull message is displayed
