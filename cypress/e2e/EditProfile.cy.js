describe('template spec', () => {
    it('Sucessful Login', () => {
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
      
      cy.get('#headlessui-popover-button-\\:rf\\: > .flex').click();
      cy.get('.mb-8 > .h-\\[44px\\]').click();
      cy.get('.sm\\:py-\\[60px\\]').click();
      cy.get('#first_name').clear();
      cy.get('#first_name').type('Otto');
      cy.get('#last_name').clear();
      cy.get('#last_name').type('Mater');
      cy.get('.sm\\:py-\\[60px\\]').click();
      cy.get('#company').clear();
      cy.get('#company').type('OttoNation');
      cy.get('#email').clear('marcel+rmc5@cratebind.com');
      cy.get('#email').type('marcel+rmc55@cratebind.com');
      cy.get('button[type="submit"]').click({force: true});
      cy.wait(1000);
     
      cy.get('.mb-4').should('have.text', 'You will receive an email with instructions for how to confirm your email address in a few minutes.');
      
    })
})