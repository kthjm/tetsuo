// @flow
import regeneratorRuntime from "regenerator-runtime";

export default async (num: number) => {
	let result = await prms(num);
	return result;
};

const prms = num =>
	Promise.resolve().then(() => {
		if (typeof num !== "number") {
			throw new Error(`${num} is not number`);
		} else {
			return num * 100;
		}
	});
