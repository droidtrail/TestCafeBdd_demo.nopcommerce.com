const { Selector} = require ('testcafe');

function select(select){
    return Selector(select).with({boundTestRun:testController})
}

exports.RegisterPage = {
    GenderButton: function(){
        return select('#gender-male')
    },
    Firstname: function(){
        return select('#FirstName')
    },
    Lastname: function(){
        return select('#LastName')
    },
    DateOfBirth: function(){
        return select("select[name='DateOfBirthDay']")
    },
    DateOfMonth: function(){
        return select("select[name='DateOfBirthMonth']")
    },
    DateOfYear: function(){
        return select("select[name='DateOfBirthYear']")
    },
    Email: function(){
        return select('#Email')
    },
    Password: function(){
        return select('#Password')
    },
    ConfirmPassword: function(){
        return select('#ConfirmPassword')
    },
    RegistrationButton: function(){
        return select('#register-button')
    },
    SuccessfulMessage: function(){
        return select('div.result').withText('Your registration completed')
    },
    ListOption: function(){
        return select('option')
    }
}