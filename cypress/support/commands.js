// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('navigateToMoreAbout', () => { 
    cy.get("a[href='/railbase-kennenlernen']")
    .should('have.length', 3)
    .first()
    .click()
})

Cypress.Commands.add('selectLanguage', (language) => { 
    if(language === 'en')
    {
    cy.get('div.right-widgets.mini-widgets a img[alt='+getLanguage(language)+']')
    .click({ force: true })
    }
})

Cypress.Commands.add('checkImageBySrc', (partialText) => { 
   return cy.get("[src*='"+partialText+"']")
})
 function getLanguage(language){

    if(language === 'en')
    {
        return "'Englisch'"
    }
    else{
        return "'German'"
    }
 }
