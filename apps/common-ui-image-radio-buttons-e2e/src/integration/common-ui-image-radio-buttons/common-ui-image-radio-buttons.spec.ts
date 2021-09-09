describe('common-ui-image-radio-buttons: CommonUiImageRadioButtons component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuiimageradiobuttons--primary&args=name;label;options;onChange;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonUiImageRadioButtons!');
    });
});
