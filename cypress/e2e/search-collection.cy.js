import cards from '../fixtures/collection.json';

describe('Search collection', () => {
  beforeEach(() => {
    cy.intercept("https://playset-api.onrender.com/api/cards", cards).visit(
      "https://playset.onrender.com/"
    );
  });

  it('Should have input to search collection by card name', () => {
    cy.get(".search-collection-input")
      .type("Gae")
      .get("#f7c6b8cb-14b7-4b70-b1b6-de70a445648c")
      .should("have.attr", "alt")
      .should("include", "Gaea's Cradle")
      .get('.all-cards')
      .children()
      .should('have.length', 1);
  });
});
