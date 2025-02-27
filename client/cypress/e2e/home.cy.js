describe('Home Page Logo', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should show the logo', () => {
    cy.get('img.cus-logo')
      .should('exist')
  });
});

describe('Home Page Tagline', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should show home page tagline', () => {
    cy.contains('h2.cus-home-tagline', 'Your guided path to programming enlightenment').should('exist');
  });
});

describe('Home Page Button', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should show the "Begin Journey" button', () => {
    cy.get('button.cus-home-btn')
      .should('exist')
      .and('have.text', 'Begin Journey');
  });
});

describe('Home Page Card Icons', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should show the card icons', () => {
    const icons = ['flash_on', 'payments', 'person'];
    icons.forEach((icon) => {
      cy.contains('i', icon).should('exist');
    });
  });
});