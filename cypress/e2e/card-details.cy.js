import data from '../fixtures/card.json';
import cards from '../fixtures/collection.json';

describe('Card details page', () => {
  beforeEach(() => {
    cy.intercept(
      "https://playset-api.onrender.com/api/proxy/card/8e8097bd-ccd9-5f97-b9c2-0c8ee324accc",
      data
    )
      .intercept("https://playset-api.onrender.com/api/cards", cards)
      .visit("http://localhost:3000/card/8e8097bd-ccd9-5f97-b9c2-0c8ee324accc");
  });

  it('Should have a card detail view', () => {
    cy.get(".name")
      .contains("Thoughtseize B")
      .get(".card-details-img")
      .should("have.attr", "alt")
      .should("include", "Thoughtseize")
      .get(".type")
      .contains("Type: Sorcery")
      .get(".mana-cost")
      .contains("Mana Cost: {B}")
      .get(".rarity")
      .contains("Rarity: Rare")
      .get(".set-name")
      .contains("Set Name: Double Masters")
      .get(".card-text")
      .contains(
        "Target player reveals their hand. You choose a nonland card from it. That player discards that card. You lose 2 life."
      )
      .get('.legalities-list')
      .children()
      .should('have.length', 10)
  });

});