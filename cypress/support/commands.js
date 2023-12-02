const Ajv = require('ajv').default;
const ajv = new Ajv({ allErrors: true });
require('ajv-errors')(ajv /*, {singleError: true} */);

Cypress.Commands.add(
	'ValidSchema',
	(schemaPath, body, status, expectStatus) => {
		cy.fixture(schemaPath).then((schema) => {
			const validate = ajv.compile(schema);
			const valid = validate(body);
			const isValid = valid && status === expectStatus;
			isValid
				? (cy.log('Schema Válido'), cy.log('Status Code: ' + status))
				: console.log('Erros: ', validate.errors);
			expect(isValid).to.be.true;
		});
	}
);
