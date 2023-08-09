describe('https://jsonplaceholder.typicode.com/posts/1', () => {
  it('should return the 200 Response', () => {
    /*
      1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
      2. Expect response to return 200 status code
    */
  });

  it('should return correct object structure', () => {
    /*
      1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
      2. Expect response to return object that matches follwing schema
      - userId: number
      - id: number
      - title: string
      - body: string
    */
  });

  it('should return ContentType header with value application/json; charset=utf-8', () => {
    /*
      1. Make GET Request to https://jsonplaceholder.typicode.com/posts/1
      2. Expect response to return header with value application/json; charset=utf-8
    */
  });
});
