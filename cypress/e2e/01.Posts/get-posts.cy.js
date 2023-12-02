let schemaPath = '';

describe('GET /posts', () => {
	beforeEach(() => {});
	it('GET de todos os posts', () => {
		schemaPath = 'schemas/01.Posts/GET-posts.json';
		cy.api({
			method: 'GET',
			url: '/posts',
		}).then((response) => {
			cy.ValidSchema(schemaPath, response.body, response.status, 200);
			expect(response.headers['content-type']).contains('application/json');
		});
	});
	it('GET de um post por ID', () => {
		schemaPath = 'schemas/01.Posts/GET-posts-id.json';
		cy.api({
			method: 'GET',
			url: '/posts/1',
		}).then((response) => {
			cy.ValidSchema(schemaPath, response.body, response.status, 200);
			expect(response.headers['content-type']).contains('application/json');
		});
	});
	it('GET de um post inexistente por ID', () => {
		schemaPath = 'schemas/01.Posts/GET-posts-empty.json';
		cy.api({
			method: 'GET',
			url: '/posts/9999',
			failOnStatusCode: false,
		}).then((response) => {
			cy.ValidSchema(schemaPath, response.body, response.status, 404);
			expect(response.headers['content-type']).contains('application/json');
		});
	});
	it('GET de comentários de um post', () => {
		schemaPath = 'schemas/01.Posts/GET-posts-comments.json';
		cy.api({
			method: 'GET',
			url: '/posts/1/comments',
		}).then((response) => {
			cy.ValidSchema(schemaPath, response.body, response.status, 200);
			expect(response.headers['content-type']).contains('application/json');
		});
	});
});
