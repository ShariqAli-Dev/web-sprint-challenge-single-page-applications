describe("Sprint Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  // Defining Components
  const nameInput = () => cy.get('input[name="name"]');
  const peppperoni = () => cy.get('input[name="pepperoni"]');
  const sausage = () => cy.get('input[name="sausage"]');
  const originalSauce = () => cy.get('input[value="original"]');
  const dropdown = () => cy.get("#size-dropdown");

  it("Test that you can add text to the box", () => {
    nameInput().should("exist");
    nameInput().type("Shariq Ali");
    nameInput().should("have.value", "Shariq Ali");
  });

  it(" test that you can select multiple toppings", () => {
    peppperoni().should("exist");
    sausage().should("exist");
    peppperoni().click();
    sausage().click();
  });

  it("Test that you can submit the form", () => {
    nameInput().type("Shariq Ali");
    peppperoni().click();
    sausage().click();
    originalSauce().click();
    dropdown().select(["small", "medium", "large"]);
    dropdown().blur();
  });
});
