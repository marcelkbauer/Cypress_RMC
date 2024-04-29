describe('template spec', () => {

  it('Explore Marketplace', () => {
    cy.visit('https://rmc.herokuapp.com/')
    cy.viewport(1310, 873)

    cy.visit('https://rmc.herokuapp.com/');
    //Search and press enter for Ascendify
    cy.get('.relative > .border').type('Ascendify{enter}');
    cy.get('#solution-card-container').should('be.visible');
    cy.get('#solution-card-container').should('contain', 'Ascendify');
    cy.wait(500)
    cy.visit('https://rmc.herokuapp.com/');
    cy.wait(500)
    //Search and press enter for Airmeet
    cy.get('.relative > .border').type('Airmeet{enter}');
    cy.get('#solution-card-container').should('be.visible');
    cy.get('#solution-card-container').should('contain', 'Airmeet');
    cy.wait(500)
    cy.visit('https://rmc.herokuapp.com/');
    cy.wait(500)
    //Search and press enter for Draup
    cy.get('.relative > .border').type('Draup{enter}');
    cy.get('#solution-card-container').should('be.visible');
    cy.get('#solution-card-container').should('contain', 'Draup');
    cy.wait(500)
    cy.visit('https://rmc.herokuapp.com/');
    cy.wait(500)

    //Verify Solution page loaded correctly
    cy.get('.relative > .border').type('Ascendify{enter}');
    cy.get('#solution-card-container').should('be.visible');
    cy.get('#solution-card-container').should('contain', 'Ascendify');
    cy.wait(500)
    cy.get('#solution-card-container').click();
    cy.get('.h-20').should('be.visible');
    cy.url().should('eq', 'https://rmc.herokuapp.com/solutions/ascendify');
    cy.get('.flex.flex-col > .flex > .text-sm').should('be.visible');
    cy.wait(500)
    //cy.xpath('///p[@innertext="PRICE:"]').should('be.visible');
    
    //cy.get('.hidden.justify-center > .hidden > .flex').should('be.visible');
    cy.get('.inline-block').should('be.visible');
    cy.get(':nth-child(2) > .text-2xl').should('be.visible');
    //return to homepage
    cy.visit('https://rmc.herokuapp.com/');

    
  });
})

 