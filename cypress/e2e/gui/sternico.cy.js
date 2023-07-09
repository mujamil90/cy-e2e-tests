describe('Sternico section', () => {

    beforeEach(() => {
        cy.visit('');
      })
  

      it("Verify handling of new tab when redirect to Sternico and testing of multi origin", () => {
        cy.get("[href*='sternico']")
        .last()
          .invoke("removeAttr", "target")
          .click();
          cy.contains('Willkommen').should('exist')
        cy.go('back')
      });


     
   
});