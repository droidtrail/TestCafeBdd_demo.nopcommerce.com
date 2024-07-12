const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const registerpage = require('../../pages/RegisterPage')

const URL = 'https://demo.nopcommerce.com/register';

Given('I open the registration page', function () {
    await testController.navigateTo(URL);
});

When('I select the gender', function () {
    await testController
    .click(registerpage.RegisterPage.GenderButton())
});

When('I enter First Name {string}', function (firstname) {
    await testController.typeText(registerpage.RegisterPage.Firstname(),firstname)
});

When('I enter Last Name {string}', function (lastname) {
    await testController.typeText(registerpage.RegisterPage.Lastname(),lastname)
});

When('I select Date of Birth {string}', function (day) {
    await testController.click(registerpage.RegisterPage.DateOfBirth())
    await testController.click(registerpage.RegisterPage.ListOption().withText(day))
});

When('I select Month of Birth {string}', function (month) {
    await testController.click(registerpage.RegisterPage.DateOfMonth())
    await testController.click(registerpage.RegisterPage.ListOption().withText(month))
});

When('I select Year of Birth {string}', function (year) {
    await testController.click(registerpage.RegisterPage.DateOfYear())
    await testController.click(registerpage.RegisterPage.ListOption().withText(year))
});

When('I enter Email {string}', function (email) {
    await testController.typeText(registerpage.RegisterPage.Email(),email)
});

When('I enter Password of Birth {string}', function (password) {
    await testController.typeText(registerpage.RegisterPage.Password(),password)
});

When('I enter Confirm Password {string}', function (password) {
    await testController.typeText(registerpage.RegisterPage.ConfirmPassword(),password)
});

When('I click register button', function () {
    await testController.click(registerpage.RegisterPage.RegistrationButton())
});

Then('successfull message is displayed', function () {
    await testController.expect(registerpage.RegisterPage.SuccessfulMessage().exists).ok
});