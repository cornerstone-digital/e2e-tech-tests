import { test } from '@playwright/test';

test('should return the 200 Response', async ({ page }) => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Expect response to return 200 status code
  */
});

test('should return correct object structure', async ({ page }) => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Expect response to return object that matches follwing schema
    - userId: number
    - id: number
    - title: string
    - body: string
  */
});

test('should return ContentType header with value application/json; charset=utf-8', async ({
  page,
}) => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Expect response to return header with value application/json; charset=utf-8
  */
});
