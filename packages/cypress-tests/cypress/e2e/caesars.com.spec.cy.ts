describe('https://www.caesars.com/book', () => {
  it('should return a search form', () => {
    // Set origin to caeaers.com to avoid cross-origin error
    /*
      1. Set origin to https://www.caesars.com to avoid cross-origin error
      2. Navigate to /book
      3. Assert that seach form loads and contains following fields:
      - Dropdown with label - Where do you want to go?
      - Dropdown with label - Check In - Check out
      - Dropdown with label - Room Options
      - Dropdown with text - Discount Codes / IATA
      - Button with text - Search
    */
    cy.origin('https://www.caesars.com', () => {
      cy.visit('/book');

      cy.contains('Where do you want to go?');
      cy.contains('Check In - Check Out');
      cy.contains('Room Options');
      cy.contains('Discount Codes / IATA');
      cy.contains('Search');
    });
  });
});
