import data from '../fixtures/card.json';
import cards from '../fixtures/collection.json';
import card from "../fixtures/post-res.json";
import updateCard from "../fixtures/update-card-res.json";
import deleteCard from "../fixtures/delete-res.json";

describe('Card details page', () => {
  beforeEach(() => {
    cy.intercept(
      "https://playset-api.onrender.com/api/proxy/card/8e8097bd-ccd9-5f97-b9c2-0c8ee324accc",
      data
    )
      .intercept("https://playset-api.onrender.com/api/cards", cards)
      .intercept("POST", "https://playset-api.onrender.com/api/cards", card)
      .visit(
        "https://playset.onrender.com/card/8e8097bd-ccd9-5f97-b9c2-0c8ee324accc"
      );
  });

  it('Should have form to update card on card details page', () => {
    cy.intercept(
      "PUT",
      "https://playset-api.onrender.com/api/cards/a21d2bd6-3e1c-4440-8799-19f72bc145b6",
      updateCard
    )
      .get(".add-new-card-form")
      .get(".add-card-input")
      .type("1")
      .get(".add-card-btn")
      .click()
      .get(".update-card-wrapper")
      .contains("Update Amount:")
      .get(".input-number")
      .type("2")
      .get(".update-btn")
      .click()
      .get(".input-number")
      .should("have.attr", "value")
      .should("include", "2");
  });

  it('Should delete card from collection on card details page', () => {
    cy.intercept("DELETE",
     "https://playset-api.onrender.com/api/cards/a21d2bd6-3e1c-4440-8799-19f72bc145b6",
      deleteCard)
      .get(".add-new-card-form")
      .get(".add-card-input")
      .type("1")
      .get(".add-card-btn")
      .click()
      .get(".delete-btn")
      .click('')
      .get(".add-card-btn")
      .contains("ADD")
  });
});