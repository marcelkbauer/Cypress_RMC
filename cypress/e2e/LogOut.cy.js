describe('template spec', () => {
    it('Successful Log Out', () => {
      cy.viewport(1310, 873)
      cy.visit('https://rmc.herokuapp.com/')
      cy.get('[href="/users/sign_up"] > .inline-block').click()
      cy.get('p > .font-semibold').click()
      cy.wait(2000)
      cy.get('.mb-7 > .relative > .border').type('marcel+rmc@cratebind.com')
      cy.get('.mb-2 > .relative > .border').type('Password2')
      //show password
      cy.get('.absolute').click()
      //click login
      cy.get('.items-center > .inline-block').click()
      cy.get('.gap-8 > .inline-block').should('be.visible')
      cy.wait(4500)
      //click LogOut
      cy.get('[class] button:nth-child(8)').click()

    })
})