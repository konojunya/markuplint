const { parse } = require('../lib/');

describe('Tags', () => {
	it('nunjucks-block', () => {
		expect(parse('{% any %}').nodeList[0].nodeName).toBe('#ps:nunjucks-block');
	});

	it('nunjucks-output', () => {
		expect(parse('{{ any }}').nodeList[0].nodeName).toBe('#ps:nunjucks-output');
	});

	it('nunjucks-comment', () => {
		expect(parse('{# any #}').nodeList[0].nodeName).toBe('#ps:nunjucks-comment');
	});
});
