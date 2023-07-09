const home = require("../../selectors/home");


describe('Localization tests',() => {
  
    beforeEach(() => {
               
      // Load all localization data
        cy.fixture(Cypress.env('language')).as("localizationData"); 
        cy.visit('')
      });

    it('Localization based test - Switch language', () => {
        cy.get("@localizationData").then(localizationData => {
        const currentLang =Cypress.env('language')  
        cy.selectLanguage(currentLang)
        cy.get(home.railbaseMainPageHeader)
        .should('have.length', 1)
        .should('have.text', localizationData.header)
   
    });
});


    it('Localization Based Test - Check description about Railbase',function(){
        cy.get("@localizationData").then(localizationData => {
        const currentLang =Cypress.env('language')  
        cy.log(localizationData.description)
        cy.selectLanguage(currentLang)
        cy.get(home.railbaseMainPageHeader)
        .parent()
        .parent()
        .next()
        .invoke('text')
        .then(text => text.trim())
        .should('eq', localizationData.description)
  
});
});

it('Localization Based Test - Check all functions related to Rail traffic with the help of images', function() {
    cy.get("@localizationData").then(localizationData => {
    const currentLang =Cypress.env('language')  
     cy.selectLanguage(currentLang)
     cy.checkImageBySrc(this.localizationData.railTrafficLongTermPlanning)
     cy.checkImageBySrc(this.localizationData.railTrafficShortTermPlanning)
     cy.checkImageBySrc(this.localizationData.railTrafficDispatching)
     cy.checkImageBySrc(this.localizationData.railTrafficRailTraffic)
 
     
 });
});

it('Localization Based Test - Check all advantages', function() {
    cy.get("@localizationData").then(localizationData => {
    const currentLang =Cypress.env('language')  
    cy.selectLanguage(currentLang)
    cy.contains(localizationData.advangeDNA)
    //cy.contains(localizationData.advangeIntuitive) // Need to check for 'EN'
    cy.contains(localizationData.advangeExtensive)
    cy.contains(localizationData.advangeCloud)  
     
 });
});



});