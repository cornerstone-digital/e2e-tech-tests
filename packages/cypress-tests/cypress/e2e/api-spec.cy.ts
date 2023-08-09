type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

let response: Cypress.Response<Post> | null = null;

beforeEach(() => {
  /*
    1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
    2. Save result to response variable
  */

  response = null;
});

describe('https://jsonplaceholder.typicode.com/posts/1', () => {
  it('should return the 200 Response', () => {
    /*
      Expect response to return 200 status code
    */

    expect(response.status).to.eq(200);
  });

  it('should return correct object structure', () => {
    /*
      Expect response to return object that matches follwing schema
      - userId: number
      - id: number
      - title: string
      - body: string
    */
  });

  it('should return ContentType header with value application/json; charset=utf-8', () => {
    /*
      1. Expect response to return header with value application/json; charset=utf-8
    */
  });
});
