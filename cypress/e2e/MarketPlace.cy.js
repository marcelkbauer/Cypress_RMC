describe('template spec', () => {

  it('Explore Marketplace', () => {
    cy.visit('https://rmc.herokuapp.com/')
    cy.viewport(1310, 873)

    cy.visit('https://rmc.herokuapp.com/');

    cy.get(':nth-child(1) > .mt-\\[2px\\]').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Career Site Platforms Solutions');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(2)').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Outbound Sourcing Tools Solutions');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(3)').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Job Board Aggregators Solutions');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(4)').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Job Boards Solutions');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(5)').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Job Distribution Solutions');
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(6)').click();
    cy.get(':nth-child(1) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Job Programmatic Advertising Solutions');

    cy.get(
      '.h-6 > [d="M15.75 7.5C14.374 7.5 13.011 7.557 11.664 7.669C10.124 7.797 9 9.103 9 10.609V14.894C9 16.401 10.128 17.708 11.67 17.834C12.913 17.936 14.17 17.991 15.438 17.999L18.22 20.78C18.3249 20.8848 18.4585 20.9561 18.6039 20.985C18.7493 21.0139 18.9 20.999 19.0369 20.9423C19.1739 20.8856 19.291 20.7895 19.3734 20.6663C19.4558 20.5431 19.4999 20.3982 19.5 20.25V17.86L19.83 17.834C21.372 17.709 22.5 16.401 22.5 14.894V10.608C22.5 9.103 21.375 7.797 19.836 7.668C18.4769 7.55562 17.1137 7.49957 15.75 7.5Z"]'
    ).click();

    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Virtual Events Solutions');
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(2)').click();
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Chatbots Solutions');
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(3)').click();
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Candidate Communications Tools Solutions');
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(4)').click();
    cy.get(':nth-child(2) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Candidate Relationship Management (CRM) Solutions');
    cy.get(':nth-child(3) > .mt-\\[2px\\]').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Screening and Matching Tools Solutions');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(2)').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Behavioral Assessments Solutions');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(3)').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Skill Assessments Solutions');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(4)').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Background Checks Solutions');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(5)').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Reference Checks Solutions');
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(6)').click();
    cy.get(':nth-child(3) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Interview Management Tools Solutions');
    cy.get(':nth-child(4) > .mt-\\[2px\\]').click();
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-8 > .flex > .mb-4').click();
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-8 > .flex > .mb-4').should('be.visible');
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Applicant Tracking Systems (ATS) Solutions');
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .bg-white').click();
    cy.get(':nth-child(4) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Recruitment process outsourcing (RPO) Solutions');

    cy.get(':nth-child(5) > .md\\:items-start > .md\\:mb-8 > .flex > .mb-4').should('be.visible');
    cy.get(':nth-child(5) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(5) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Employer Profiles Solutions');
    cy.get(':nth-child(5) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .bg-white').click();
    cy.get(':nth-child(5) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Referral Tools Solutions');
    cy.get(':nth-child(6) > .mt-\\[2px\\]').click();
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-8 > .flex > .mb-4').should('be.visible');
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Employer Brand Solutions');
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(2)').click();
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Employer Branding Agencies Solutions');
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > :nth-child(3)').click();
    cy.get(':nth-child(6) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Recruitment Marketing Agencies Solutions');
    cy.get(':nth-child(7) > .mt-\\[2px\\]').click();
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-8 > .flex > .mb-4').should('be.visible');
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .md\\:text-black-blue').should('be.visible');
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.class', 'hidden');
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all Labor Market Intelligence Solutions');
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-20 > .max-md\\:scrollbar-hide > .bg-white').click();
    cy.get(':nth-child(7) > .md\\:items-start > .md\\:mb-8 > .mx-\\[6px\\] > .hidden').should('have.text', 'See all People Analytics Solutions');
    
  })
})

 