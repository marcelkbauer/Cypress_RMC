describe('template spec', () => {
  it('Open Solution for Editing', () => {
    cy.visit('https://rmc.herokuapp.com/login')
      cy.get('.mb-7 > .relative > .border').type('marcel+rmc@cratebind.com')
      cy.get('.mb-2 > .relative > .border').type('Password2')
      //show password
      cy.get('.absolute').click()
      //click login
      cy.get('.items-center > .inline-block').click()
      cy.wait(2000)
      //change to User Edit page
    cy.visit('https://rmc.herokuapp.com/users/edit')
    cy.wait(2000)
    cy.get('#solution-card-container').click();
    cy.get('a.w-full > .inline-block').click();
    cy.get('img[alt="solution logo"]').should('be.visible')
    //RMC Logo is Visible
    cy.get('img[alt="RMC Logo"]').should('be.visible')
    //Upload New Logo Button should be visible
    cy.get('[class="md\:w-\[230px\]"] button').should('be.visible')
    

  })
})