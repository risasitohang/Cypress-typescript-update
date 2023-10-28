describe('Test Case 2: Authentication', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("Login").click()
    cy.contains("Products").should('be.visible') 
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.contains("Swag Labs").should('be.visible')

  })
})