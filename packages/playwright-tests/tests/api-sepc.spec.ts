import { test, expect, APIResponse } from '@playwright/test';

let response: APIResponse | null = null;

test.beforeEach(async ({ request }) => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Save result to response variable
  */
  response = null;
});

test('should return the 200 Response', async () => {
  /*
    Expect response to return 200 status code
  */

  expect(response?.status()).toBe(200);
});

test('should return correct object structure', async () => {
  /*
    Expect response to return object that matches follwing schema
    - userId: number
    - id: number
    - title: string
    - body: string
  */
});

test('should return ContentType header with value application/json; charset=utf-8', async () => {
  /*
    Expect response to return header with value application/json; charset=utf-8
  */
});
