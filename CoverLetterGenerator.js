//Creates a cover letter in the console with javascript
//As of 10/23/2020
//Create this as a website, coverletter website generator 
var companyInfo = {
    nameOfHiringManager: `default`,
    companyAddress: `default`,
    companyPhoneNumber: `default`,
    companyEmail: `default`,
};

var aboutYourself = {
    name: `Austyn Washington`,
    role: `default`,
    emailToContact: `default`,
    phoneNumber: `(850)356-2024`,


};


var prompt = require('prompt');
prompt.start();

prompt.get(['nameOfHiringManager', 'companyAddress', 'companyPhoneNumber', 'companyEmail', 'name', 'role', 'email', 'phoneNumber'], function(err, result) {
    companyInfo.nameOfHiringManager = result.nameOfHiringManager;
    companyInfo.companyAddress = result.companyAddress;
    companyInfo.companyPhoneNumber = result.companyPhoneNumber;
    companyInfo.companyEmail = result.companyEmail;

    aboutYourself.name = result.name;
    aboutYourself.role = result.role;
    aboutYourself.emailToContact = result.email;
    aboutYourself.phoneNumber = result.phoneNumber;

});


var coverLetter =
    `Dear ` + companyInfo.nameOfHiringManager + "\n";


console.log(companyInfo.nameOfHiringManager);