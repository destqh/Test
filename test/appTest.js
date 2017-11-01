const assert = require('chai').assert;
const app = require('../app');

describe('App', function() {
	it('sayHello should return hello', function() {
		let result = app.sayHello();
		assert.equal(result, 'hello');
	});
	
	it('sayHello should return type string', function() {
		let result = app.sayHello();
		assert.typeOf(result, 'string');
	});
});