const home = require("../../selectors/home");


describe('Home page', () => {
  
    before( () => {
  
        cy.visit('') 
      });

    

 it('Check page is scrolling after click on Advantages tab', function() {
  cy.get("a[href='/#vorteile']")
  .first()
  .click()

  cy.window().then(($window) => {
    expect($window.scrollY).to.be.closeTo(200, 100);
  });
   
 });

    it('Check menu options', () => {
        
        cy.get('ul#primary-menu a')
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
    
});