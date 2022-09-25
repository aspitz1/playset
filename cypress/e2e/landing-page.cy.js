import cards from '../fixtures/collection.json';

describe('Landing page', () => {
  beforeEach(() => {
    cy.intercept('https://playset-api.onrender.com/api/cards', cards)
      .visit("http://localhost:3000/")
  });

  it('Should have navbar at top of page', () => {
    cy.get('header')
      .contains('Playset')
      .get('header')
      .children('nav')
      .get('.navButton')
      .contains('Find New Card')
      .get('.search-collection-input')
      .should('have.attr', 'placeholder')
      .should('include', 'Search Collection');
  });

  it('Should load collection on landing page', () => {
    cy.get('#f7c6b8cb-14b7-4b70-b1b6-de70a445648c')
      .should('have.attr', 'alt')
      .should('include', 'Gaea\'s Cradle')
      .get('.card-btn')
      .eq(0)
      .contains('Amount: 4');
    
    cy.get('#fe2b50c8-6bc7-4ad9-a6a0-7a20a6aade3b')
      .should('have.attr', 'alt')
      .should('include', 'Verdant Catacombs')
      .get('.card-btn')
      .eq(1)
      .contains('Amount: 2');

    cy.get('#f16b85ce-8dff-4c74-979e-7404890ee090')
      .should('have.attr', 'alt')
      .should('include', 'Heritage Druid')
      .get('.card-btn')
      .eq(2)
      .contains('Amount: 1');
  });
})