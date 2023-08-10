import { test, expect } from '@playwright/test';

test('should return a search form', async ({ page }) => {
  /*
      1. Navigate to https://www.caesars.com/book
      2. Assert that seach form loads and contains following fields:
      - Dropdown with label - Where do you want to go?
      - Dropdown with label - Check In - Check out
      - Dropdown with label - Room Options
      - Dropdown with text - Discount Codes / IATA
      - Button with text - Search
    */

  await page.goto('https://www.caesars.com/book');

  const whereDoYouWantToGo = await page.$('text=Where do you want to go?');
  expect(whereDoYouWantToGo).toBeTruthy();

  const checkInCheckOut = await page.$('text=Check In - Check Out');
  expect(checkInCheckOut).toBeTruthy();

  const bookOptions = await page.$('text=Room Options');
  expect(bookOptions).toBeTruthy();

  const discountCodes = await page.$('text=Discount Codes / IATA');
  expect(discountCodes).toBeTruthy();

  const searchButton = await page.$('text=Search');
  expect(searchButton).toBeTruthy();
});
