import React from "react";
import AddCustomer from "./AddCustomer";

describe("Test AddCustomer component", () => {
  beforeEach(() => {
    cy.mount(<AddCustomer />);
  });

  it("it renders all customer blocks", () => {
    cy.get('[data-cy="create-new-customer"]')
      .should("exist")
      .contains("Create New Customer");

    cy.get('[data-cy="publish-button"]').should("exist");

    cy.get('[data-cy="heading-customer-contacts"]')
      .should("exist")
      .contains("Customer's Contacts");
  });
});
