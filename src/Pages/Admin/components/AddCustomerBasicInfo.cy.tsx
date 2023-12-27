import React from "react";
import AddCustomerBasicInfo from "./AddCustomerBasicInfo";

describe("AddCustomerBasicInfo", () => {
  it("it renders successfully", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddCustomerBasicInfo />);
  });

  it("it renders field", () => {
    cy.mount(<AddCustomerBasicInfo />);
  });
});
