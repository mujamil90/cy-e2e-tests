const home = require("../../selectors/home");


describe('Home page', () => {
  
    before( () => {
  
        cy.visit('') 
      });

    

 it('Check page is scrolling after click on Advantages tab', function() {
  cy.get(home.advantagesMenuOption)
  .first()
  .click()

  cy.window().then(($window) => {
    expect($window.scrollY).to.be.closeTo(200, 100);
  });
   
 });

    it('Check menu options', () => {
        
        cy.get(home.menuOptions)
        .should(($span) => {
          // return an array of texts from all of the p's
          const texts = $span.map((i, el) => Cypress.$(el).text())
          // jquery map returns jquery object
          // and .get() convert this to simple array
          const menuOptions = texts.get()
          // array should have length of 5
          expect(menuOptions, 'has 5 span').to.have.length(5)
          // use second argument to expect(...) to provide clear
          // message with each assertion
          expect(menuOptions, 'has expected text in each span').to.deep.eq([
            'VORTEILE',
            'FUNKTIONEN',
            'PARTNER',
            'STERNICO',
            'FAQ',
          ])
        })
    });


    it('verify navigation across the pages', () => {
      let brokenLinks = 0
      let activeLinks = 0
      cy.get('a').each(($link, index) => {
          const href = $link.attr('href')
          if (href) {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                  if (response.status >= 400) {

                      cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                      brokenLinks++
                  }
                  else {
                      cy.log(`*** link  ${index + 1} is Active Link ***`)
                      activeLinks++

                  }

              })
          }

      }).then(($links) => {
          const totalLinks = $links.length
          cy.log(`**** total links **** ${totalLinks}`)
          cy.log(`**** broken links **** ${brokenLinks}`)
          cy.log(`**** active links **** ${activeLinks}`)
      })
  })
    
  it("Check redirection of all 3 more about buttons", () => {
  
    cy.get(home.getToKnow)
    .as('moreAboutButtons')
    .should('have.length', 5)
    .eq(1)
    .should('have.text', 'RAILBASE KENNENLERNEN')
    .click({force: true})
    cy.url().should('include', '/railbase-kennenlernen/')
    cy.go('back')

    cy.get('@moreAboutButtons')
    .eq(3)
    .click()
    cy.url().should('include', '/railbase-kennenlernen/')
    cy.go('back')

    cy.get('@moreAboutButtons')
    .last()
    .click()
    cy.url().should('include', '/railbase-kennenlernen/')
    cy.go('back')

  });


  it("Mobile screen resolution - Check redirection when when click on more about button", () => {
    cy.viewport('iphone-xr')
    cy.get(home.mobileMenu)
    .should('have.length', 1)
    .click()

    cy.get(home.getToKnow)
    .eq(2)
    .should('have.text', 'RAILBASE KENNENLERNEN')
    .click()

    cy.url().should('include', '/railbase-kennenlernen/')
  });
});