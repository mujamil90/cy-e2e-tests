describe('More about railbase page', () => {
    beforeEach(() => {
       
        cy.visit('');
      })
  
    it('Check presence of more about page', () => {
        cy.navigateToMoreAbout()
        cy.url().should('eq', 'https://railbase.com/railbase-kennenlernen/')
        //Checking all textboxes presence with type 'text'
        cy.get("[type='text']")
        .should('have.length', 4)
        .first('have.value', 'Vorname')

     //Checking all textboxes presence with type 'email'
        cy.get("[type='email']")
        .should('have.length', 1)
        .first('have.value', '')
        
    //Checking all textboxes presence with type 'tel'
        cy.get("[type='tel']")
        .should('have.length', 1)
        .first('have.value', '07400 123456')

  //Checking presence of dropdown
        cy.get("select[data-choice='active']")
        .should('have.length', 1)
        .first('have.value', 'Zeitfenster auswählen...')

    });
});
