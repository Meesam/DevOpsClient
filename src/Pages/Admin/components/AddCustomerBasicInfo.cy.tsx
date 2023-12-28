import React from "react";
import AddCustomerBasicInfo from "./AddCustomerBasicInfo";

describe("Test the AddCustomerBasicInfo component", () => {
  beforeEach(() => {
    cy.mount(<AddCustomerBasicInfo />);
  });

  it("it renders all necessory lable fields", () => {
    cy.get('[data-cy="customer-name-label"]')
      .should("exist")
      .contains("Customer Name");
    cy.get('[data-cy="website-label"]').should("exist").contains("Website");
    cy.get('[data-cy="LogoUrl-label"]').should("exist").contains("LogoUrl");
    cy.get('[data-cy="Description-label"]')
      .should("exist")
      .contains("Description");
  });

  it("it renders all necessory input fields", () => {
    cy.get('[data-cy="customer-name-input"]')
      .should("exist")
      .should("have.value", "");
    cy.get('[data-cy="website-input"]')
      .should("exist")
      .should("have.value", "");
    cy.get('[data-cy="LogoUrl-input"]')
      .should("exist")
      .should("have.value", "");
    cy.get('[data-cy="Description-input"]')
      .should("exist")
      .should("have.value", "");
  });

  it("renders all necessory input fields and able to change the value", () => {
    cy.get('[data-cy="customer-name-input"]')
      .type("Test Customer")
      .should("have.value", "Test Customer");
    cy.get('[data-cy="website-input"]')
      .type("Test Website")
      .should("have.value", "Test Website");
    cy.get('[data-cy="LogoUrl-input"]')
      .type("Test Logo")
      .should("have.value", "Test Logo");
    cy.get('[data-cy="Description-input"]')
      .type("Test Desc")
      .should("have.value", "Test Desc");
  });
});
