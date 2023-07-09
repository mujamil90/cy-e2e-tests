const home = require("../../selectors/home");


describe('Localization tests',() => {
  
    beforeEach(() => {
      
      

      //  cy.fixture('en').then(function(localizationData)  {
           // this.localizationData = localizationData
           
           cy.fixture('en').as("localizationData");
       
        cy.visit('')
      });

    it.only('Localization based test - Switch language', () => {
        cy.get("@localizationData").then(localizationData => {
       const currentLang =Cypress.env('language')  
        cy.selectLanguage(currentLang)
        cy.get("h1.elementor-heading-title.elementor-size-default")
        .should('have.length', 1)
        .should('have.text', localizationData.header)
      //  cy.pause()
    });
});


    it.only('Localization Based Test - Check description about Railbase',function(){
        cy.get("@localizationData").then(localizationData => {
        const currentLang =Cypress.env('language')  
        cy.log(localizationData.description)
        cy.selectLanguage(currentLang)
        cy.get("h1.elementor-heading-title.elementor-size-default")
        .parent()
        .parent()
        .next()
        .invoke('text')
        .then(text => text.trim())
        .should('eq', localizationData.description)
     //  cy.pause()
});
});

it.only('Localization Based Test - Check all functions related to Rail traffic with the help of images', function() {
    cy.get("@localizationData").then(localizationData => {
    const currentLang =Cypress.env('language')  
     cy.selectLanguage(currentLang)
     cy.checkImageBySrc(this.localizationData.railTrafficLongTermPlanning).should('have.length', 1)
     cy.checkImageBySrc(this.localizationData.railTrafficShortTermPlanning).should('have.length', 1)
     cy.checkImageBySrc(this.localizationData.railTrafficDispatching).should('have.length', 1)
     cy.checkImageBySrc(this.localizationData.railTrafficRailTraffic).should('have.length', 1)
 
     
 });
});
it.only('Localization Based Test - Check all advantages', function() {
    cy.get("@localizationData").then(localizationData => {
    const currentLang =Cypress.env('language')  
     cy.selectLanguage(currentLang)
    // console.log(this.localizationData.functionDNA)
     cy.contains(localizationData.advangeDNA)
   //  console.log(this.localizationData.advangeDNA)
  //  cy.contains(this.localizationData.advangeIntuitive)
   //  console.log(this.localizationData.advangeDNA)
     cy.contains(localizationData.advangeExtensive)
  //   console.log(this.localizationData.advangeDNA)
     cy.contains(localizationData.advangeCloud)  
     
 });
});



});