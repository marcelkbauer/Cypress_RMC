describe('template spec', () => {
    it('Sucessful Link Routing', () => {
      cy.viewport(1310, 873)
      cy.visit('https://rmc.herokuapp.com/')
      cy.url().should('eq', 'https://rmc.herokuapp.com/')

      
      //Click Community Link
      cy.get('#headlessui-popover-button-\\:r2\\: > .flex').click();
      cy.wait(1000);
      //cy.url().should('eq', 'https://community.recruitmentmarketing.com/')
      cy.visit('https://rmc.herokuapp.com/')
      cy.wait(500)
      //Events Link
      cy.get('#headlessui-popover-button-\\:r4\\: > .flex').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      //All Topics Sublink
      cy.get('[href="https://www.recruitmentmarketing.com/topics"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      //Employer Brand sub link
      cy.get('[href="https://www.recruitmentmarketing.com/topics"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      cy.get('[href="https://www.recruitmentmarketing.com/topics/employer-brand"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      cy.get('[href="https://www.recruitmentmarketing.com/topics/candidate-experience"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      cy.get('[href="https://www.recruitmentmarketing.com/topics/ta-media"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      cy.get('[href="https://www.recruitmentmarketing.com/topics/ta-tech"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Topics Dropdown
      cy.get('#headlessui-popover-button-\\:r6\\: > .flex').click();
      cy.get('[href="https://www.recruitmentmarketing.com/topics/industry-insights"]').click();
      cy.visit('https://rmc.herokuapp.com/')
      //Podcasts link
      cy.get('#headlessui-popover-button-\\:rb\\: > .flex').click();
      cy.visit('https://rmc.herokuapp.com/')
      //About Link
      cy.get('#headlessui-popover-button-\\:rd\\: > .flex').click();
      cy.visit('https://rmc.herokuapp.com/')

      
    })
})