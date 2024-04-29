describe('template spec', () => {
  it('Route to User Edit Page', () => {
    cy.viewport(1310, 873)
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
    cy.get('.false').should('be.visible')
    //open right menu
    //cy.get('[alt="hamburger icon"]').click()

    //close right menu
    //cy.get('[alt="close icon"]').click()
    cy.wait(2000)
    cy.get('.false').should('be.visible')
    cy.get('[alt="edit"]').should('be.visible')
    //cy.get('.h-\[44px\]').should('be.visible')
    //Name header
    cy.get('[class] .justify-between:nth-of-type(1) .uppercase').should('be.visible')
    //user Name
    cy.get('[class] .justify-between:nth-of-type(2) .uppercase').should('be.visible')
    //y.get('.gap-\[15px\] > :nth-child(1) > :nth-child(2)').should('be.visible')
    //Company Header
    cy.get('[class] .justify-between:nth-of-type(2) .uppercase').should('be.visible')
    //cy.get('.gap-\[15px\] > :nth-child(2) > .font-bold').should('be.visible')
    //Company Name
    cy.get('div:nth-of-type(2) > p:nth-of-type(2)').should('be.visible')
    //cy.get('.gap-\[15px\] > :nth-child(2) > :nth-child(2)').should('be.visible')
    //Email address header
    cy.get('div:nth-of-type(3) > .font-bold.uppercase').should('be.visible')
    //cy.get(':nth-child(4) > .font-bold').should('be.visible')
    //Email Address
    cy.get('div:nth-of-type(3) > p:nth-of-type(2)').should('be.visible')
    //cy.get(':nth-child(4) > :nth-child(2)').should('be.visible')

    //Edit User Name and Validate change - then change back
    cy.get('.mb-8 > .h-\\[44px\\]').click();
    cy.get('#first_name').clear('O');
    cy.get('#first_name').type('Otto2');
    cy.get('#company').clear('OttoNation2');
    cy.get('#company').type('OttoNation2');
    cy.get('.flex-col > .bg-teal').click();
    cy.get('.mb-4').should('be.visible');
    cy.get('#headlessui-popover-button-\\:rf\\: > .flex').click();
    cy.get('.false').should('have.text', 'Hello, Otto2');
    cy.get('.mb-8 > .h-\\[44px\\]').click();
    cy.get('#first_name').clear('Otto');
    cy.get('#first_name').type('Otto');
    cy.get('#company').clear('OttoNation');
    cy.get('#company').type('OttoNation');
    cy.get('.flex-col > .bg-teal').click();
    cy.get('#headlessui-popover-button-\\:r15\\: > .flex').click();
    cy.get('.false').should('have.text', 'Hello, Otto');
    //verify cancel button works
    cy.get('.mb-8 > .h-\\[44px\\]').click();
    //click cancel
    cy.get('.flex-col > .bg-dark-blue').click();
   
  })
})