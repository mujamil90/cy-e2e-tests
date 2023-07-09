// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import chaiJsonSchema from 'chai-json-schema'
chai.use(chaiJsonSchema);

require('@cypress/skip-test/support')

before(() => {
    cy.log('Checking language...')
   // cy.log(!['en', 'de'].includes(Cypress.env().language))
    if(!['en', 'de'].includes(Cypress.env().language))
    {
        cy.log('Please provide correct language')
        Cypress.runner.stop()
      //  eval("window.top.document.body.querySelector('header button.stop').click()");
        //Cypress.stop()
        //throw new OperationCanceledException();
        //Cypress.runner.abort() 
      // cy.pause()
    }

    
});