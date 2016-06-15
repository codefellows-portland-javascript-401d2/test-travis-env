const assert = require( 'assert' ); 

describe( 'env variables', () => {
	it( 'should have FOO and BAR', () => {
		assert.equal( process.env.FOO, 'foo' );
		assert.equal( process.env.BAR, 'bar' );
	})
});