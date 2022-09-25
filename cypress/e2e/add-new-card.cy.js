import cards from "../fixtures/collection.json";
import data from "../fixtures/cards.json";
import card from "../fixtures/post-res.json";

describe("Add new card", () => {
  beforeEach(() => {
    cy.intercept("https://playset-api.onrender.com/api/cards", cards)
      .visit("http://localhost:3000/");
  });

  it('Should search for new cards by name', () => {
    cy.intercept(
      "https://playset-api.onrender.com/api/proxy/cards/Thoughtseize",
      data
    )
      .intercept(
        "https://playset-api.onrender.com/api/proxy/card/8e8097bd-ccd9-5f97-b9c2-0c8ee324accc",
        data
      )
      .intercept("POST", "https://playset-api.onrender.com/api/cards", card)
      .get(".navButton")
      .click()
      .get(".find-new-card-input")
      .type("Thoughtseize")
      .get(".find-new-card-btn")
      .click()
      .get(".card-img")
      .should("have.attr", "alt")
      .should("include", "Thoughtseize")
      .get(".card-btn")
      .click()
      .get(".add-card-input")
      .type("1")
      .get(".add-card-btn")
      .click("")
      .get(".navButton")
      .eq(1)
      .contains("Home")
      .click()
      .get(".card-img")
      .eq(3)
      .should("have.attr", "alt")
      .get(".card-btn")
      .contains("Amount: 1")
  });

});
