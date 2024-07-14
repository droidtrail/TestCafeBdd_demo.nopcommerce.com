Feature: Registration Feature

    As a visitor I can create a new account by the registration feature
@e2e
Scenario Outline: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And I enter First Name "<firstname>"
And I enter Last Name "<lastname>"
And I select Date of Birth "<day>"
And I select Month of Birth "<month>"
And I select Year of Birth "<year>"
And I enter Email "<email>"
And I enter Password of Birth "<password>"
And I enter Confirm Password "<password>"
And I click register button
Then successfull message is displayed
Examples:
    | firstname | lastname | day      | month     | year     | email                |password|
    | moataz    | nabil    | 5        | November  | 2000     | test@test.com        |123456  |