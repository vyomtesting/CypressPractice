/// <reference types="cypress" />

import GooglePageObjects from '../../support/PageObjects/GooglePageObjects'
 const googlePageObjects = new GooglePageObjects()
describe('Google Tests', function () {
 beforeEach(function () {
   cy.fixture("example").then(function (data) {
     this.data = data
})
})

it("Verify Google", function () {
    cy.login()
    googlePageObjects.GoogleSearch().type("India")
    //testing
})


})
