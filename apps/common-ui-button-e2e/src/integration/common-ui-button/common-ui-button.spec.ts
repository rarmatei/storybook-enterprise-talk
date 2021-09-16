describe('common-ui-button: CommonUiButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuibutton--primary&args=disabled:false;text:Storybook;'));
    
  it('should render the button text', () => {
    cy.get('button').should('contain', 'Storybook');
    cy.wait(5000);
  });
});
