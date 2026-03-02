import { describe, expect, it } from 'vitest';
import { formatCopyright } from './copyrightUtils';

describe('formatCopyright', () => {
	it('should replace (c) with ©', () => {
		const result = formatCopyright('Copyright (c) 2024');
		expect(result).toBe('Copyright © 2024');
	});

	it('should replace (year) with current year', () => {
		const currentYear = new Date().getFullYear();
		const result = formatCopyright('Copyright (year)');
		expect(result).toBe(`Copyright ${currentYear}`);
	});

	it('should replace <3 with ❤️', () => {
		const result = formatCopyright('I <3 coding');
		expect(result).toBe('I ❤️ coding');
	});

	it('should replace (dot) with •', () => {
		const result = formatCopyright('Version (dot)1(dot)0');
		expect(result).toBe('Version •1•0');
	});

	it('should handle multiple replacements', () => {
		const currentYear = new Date().getFullYear();
		const result = formatCopyright('(c) (year) <3 (dot)');
		expect(result).toBe(`© ${currentYear} ❤️ •`);
	});

	it('should return undefined if input is undefined', () => {
		const result = formatCopyright(undefined);
		expect(result).toBeUndefined();
	});

	it('should return empty string if input is empty string', () => {
		const result = formatCopyright('');
		expect(result).toBe('');
	});

	it('should not modify string without placeholders', () => {
		const result = formatCopyright('No placeholders here');
		expect(result).toBe('No placeholders here');
	});
});
