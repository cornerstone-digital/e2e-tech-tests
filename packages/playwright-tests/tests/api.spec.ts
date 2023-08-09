import { test, expect, APIResponse } from '@playwright/test';

let response: APIResponse | null = null;

test.beforeEach(async ({ request }) => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Save result to response variable
  */
  response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
});

test('should return the 200 Response', async () => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Save result to response variable
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
  const responseBody = await response?.json();

  expect(responseBody).toHaveProperty('userId');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('body');

  expect(typeof responseBody.userId).toBe('number');
  expect(typeof responseBody.id).toBe('number');
  expect(typeof responseBody.title).toBe('string');
  expect(typeof responseBody.body).toBe('string');
});

test('should return ContentType header with value application/json; charset=utf-8', async () => {
  /*
    Expect response to return header with value application/json; charset=utf-8
  */

  expect(response?.headers()['content-type']).toBe('application/json; charset=utf-8');
});
