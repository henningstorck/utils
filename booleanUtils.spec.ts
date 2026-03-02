import { describe, expect, it } from 'vitest';
import { strToBool } from './booleanUtils';

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
