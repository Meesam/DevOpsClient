import React from "react";
import AddCustomerContact from "./AddCustomerContact";

describe("Test the AddCustomerContact component", () => {
  beforeEach(() => {
    cy.mount(<AddCustomerContact />);
  });

  it("it renders all necessory lable fields", () => {
    cy.get('[data-cy="Phone-lable"]').should("exist").contains("Phone");
    cy.get('[data-cy="Email-lable"]').should("exist").contains("Email");
    cy.get('[data-cy="Street-lable"]').should("exist").contains("Street");
    cy.get('[data-cy="City-lable"]').should("exist").contains("City");
    cy.get('[data-cy="State-lable"]').should("exist").contains("State");
    cy.get('[data-cy="Zipcode-lable"]').should("exist").contains("Zipcode");
    cy.get('[data-cy="addContact-button"]')
      .should("exist")
      .contains("Add New Contact");
  });

  it("it renders all necessory input fields", () => {
    cy.get('[data-cy="Phone-input"]').should("exist").should("have.value", "");
    cy.get('[data-cy="Email-input"]').should("exist").should("have.value", "");
    cy.get('[data-cy="Street-input"]').should("exist").should("have.value", "");
    cy.get('[data-cy="City-input"]').should("exist").should("have.value", "");
    cy.get('[data-cy="State-input"]').should("exist").should("have.value", "");
    cy.get('[data-cy="Zipcode-input"]')
      .should("exist")
      .should("have.value", "");
  });

  it("renders all necessory input fields and able to change the value", () => {
    cy.get('[data-cy="Phone-input"]')
      .type("Test Phone")
      .should("have.value", "Test Phone");
    cy.get('[data-cy="Email-input"]')
      .type("Test.email@testing.com")
      .should("have.value", "Test.email@testing.com");
    cy.get('[data-cy="Street-input"]')
      .type("Test Street")
      .should("have.value", "Test Street");
    cy.get('[data-cy="City-input"]')
      .type("Test City")
      .should("have.value", "Test City");
    cy.get('[data-cy="State-input"]')
      .type("Test State")
      .should("have.value", "Test State");
    cy.get('[data-cy="Zipcode-input"]')
      .type("Test Zipcode")
      .should("have.value", "Test Zipcode");
  });

  it("renders the validation messages on each field on button click", () => {
    cy.get('[data-cy="addContact-button"]').click();

    cy.get('[data-cy="phone-error"]').should("exist");
    cy.get('[data-cy="email-error"]').should("exist");
    cy.get('[data-cy="street-error"]').should("exist");
    cy.get('[data-cy="city-error"]').should("exist");
    cy.get('[data-cy="state-error"]').should("exist");
    cy.get('[data-cy="postalCode-error"]').should("exist");
  });
});
