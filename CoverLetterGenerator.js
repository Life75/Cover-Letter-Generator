//Creates a cover letter in the console with javascript





class CoverLetter {
    constructor(userName) {
        this.userName = userName;
    }

    companyInfo(nameOfHiringManager, companyAddress, companyNumber, companyEmail) {

    }
}

let coverLetter = new CoverLetter("Austyn Washington");


var prompt = require('prompt');

prompt.start();

prompt.get(['nameOfHringManager', 'companyAddress', 'companyPhoneNumber', 'companyEmail'], function(err, result) {
    console.log('Name of hiring manager: ' + result.nameOfHringManager);
    console.log(`Company Address: ` + result.companyAddress);
    console.log('Company Phone Number' + result.companyPhoneNumber);
    console.log('Company Email: ' + result.companyEmail);

    coverLetter.companyInfo(
        result.nameOfHiringManager,
        result.companyAddress,
        result.companyPhoneNumber,
        result.companyEmail
    )
});