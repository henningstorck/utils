import { describe, expect, it } from 'vitest';
import { formatBool, strToBool } from './booleanUtils';

describe('strToBool', () => {
	it('should parse true', () => {
		const result = strToBool('true');
		expect(result).toBe(true);
	});

	it('should parse false', () => {
		const result = strToBool('false');
		expect(result).toBe(false);
	});

	it('should parse undefined as false', () => {
		const result = strToBool(undefined);
		expect(result).toBe(false);
	});

	it('should parse empty string as false', () => {
		const result = strToBool('');
		expect(result).toBe(false);
	});

	it('should be case insensitive', () => {
		const result = strToBool('TrUe');
		expect(result).toBe(true);
	});
});

describe('formatBool', () => {
	it('should format true', () => {
		const result = formatBool(true, 'Yes', 'No');
		expect(result).toBe('Yes');
	});

	it('should format false', () => {
		const result = formatBool(false, 'Yes', 'No');
		expect(result).toBe('No');
	});

	it('should format undefined', () => {
		const result = formatBool(undefined, 'Yes', 'No');
		expect(result).toBe('No');
	});
});
