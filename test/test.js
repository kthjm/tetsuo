// import regeneratorRuntime from "regenerator-runtime";
import assert from "assert";
import fn from "../src/index.js";

describe(`test`, () => {
	it(`valid`, async () => {
		let arg = 5,
			expect = 500,
			result = await fn(5);
		assert.deepStrictEqual(result, expect);
	});

	it(`invalid`, async () => {
		let arg = "5";
		try {
			await fn(arg);
		} catch (err) {
			let expect = `${arg} is not number`;
			assert.deepStrictEqual(err.message, expect);
		}
	});
});
