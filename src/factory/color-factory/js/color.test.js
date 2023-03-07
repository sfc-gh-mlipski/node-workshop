import { create } from './ColorFactory';
import {foo} from "./ColorFactory";

describe('this', () => {
	it('should work', () => {

		expect(foo()).toEqual("bar");


	});
});