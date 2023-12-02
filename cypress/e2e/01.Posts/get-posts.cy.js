const schemaPath = 'schemas/01.Posts/GET-posts.json';

describe('GET /posts', () => {
	beforeEach(() => {});
	it('GET de todos os posts', () => {
		cy.api({
			method: 'GET',
			url: '/posts',
		}).then((response) => {
			cy.ValidSchema(schemaPath, response.body, response.status, 200);
			console.log(response);
			expect(response.headers['content-type']).contains('application/json');
		});
	});
});
