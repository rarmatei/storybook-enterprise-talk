describe('common-ui-input: CommonUiInput component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuiinput--primary&args=name;label;type;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonUiInput!');
    });
});
