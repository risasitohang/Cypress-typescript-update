describe('Test Case 1: Chart page', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
    cy.contains("Products").should('be.visible') 
    cy.get('#shopping_cart_container').click()
    cy.contains("Your Cart").should('be.visible')

  })
})