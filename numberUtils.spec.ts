import { describe, expect, it } from 'vitest';
import { strToFloat, strToInt } from './numberUtils';

describe('numberUtils', () => {
	it('should parse integer', () => {
		const result = strToInt('27');
		expect(result).toBe(27);
	});

	it('should return default value for non-integer', () => {
		const result = strToInt('abc', 10);
		expect(result).toBe(10);
	});

	it('should return default value for undefined', () => {
		const result = strToInt(undefined, 5);
		expect(result).toBe(5);
	});

	it('should return default value for empty string', () => {
		const result = strToInt('', 3);
		expect(result).toBe(3);
	});

	it('should return default value for NaN', () => {
		const result = strToInt('NaN', 8);
		expect(result).toBe(8);
	});

	it('should parse float as integer', () => {
		const result = strToInt('3.81');
		expect(result).toBe(3);
	});
});

describe('strToFloat', () => {
	it('should parse float', () => {
		const result = strToFloat('7.49');
		expect(result).toBe(7.49);
	});

	it('should return default value for non-float', () => {
		const result = strToFloat('abc', 1.5);
		expect(result).toBe(1.5);
	});

	it('should return default value for undefined', () => {
		const result = strToFloat(undefined, 2.5);
		expect(result).toBe(2.5);
	});

	it('should return default value for empty string', () => {
		const result = strToFloat('', 3.5);
		expect(result).toBe(3.5);
	});

	it('should return default value for NaN', () => {
		const result = strToFloat('NaN', 4.5);
		expect(result).toBe(4.5);
	});

	it('should parse integer as float', () => {
		const result = strToFloat('5');
		expect(result).toBe(5);
	});
});
