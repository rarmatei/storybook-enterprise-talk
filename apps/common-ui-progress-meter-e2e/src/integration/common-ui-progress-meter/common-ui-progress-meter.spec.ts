describe('common-ui-progress-meter: CommonUiProgressMeter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuiprogressmeter--primary&args=value;size;my;hasStripe:false;isAnimated:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonUiProgressMeter!');
    });
});
