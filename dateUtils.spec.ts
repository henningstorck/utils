import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { formatDate, formatDateForInput, formatDateTime, formatTime } from './dateUtils';

describe('formatDate', () => {
	it('should format date correctly in German', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-DE');
		const result = formatDate('2025-10-09T14:20:00.000Z');
		expect(result).toBe('09.10.2025');
	});

	it('should format date correctly in English', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
		const result = formatDate('2025-10-09T14:20:00.000Z');
		expect(result).toBe('Oct 9, 2025');
	});

	it('should format empty date correctly', () => {
		const result = formatDate('');
		expect(result).toBe('');
	});
});

describe('formatTime', () => {
	beforeEach(() => {
		vi.stubEnv('TZ', 'UTC');
	});

	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it('should format date correctly in German', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-DE');
		const result = formatTime('2025-10-09T14:20:00.000Z');
		expect(result).toBe('14:20');
	});

	it('should format date correctly in English', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
		const result = formatTime('2025-10-09T14:20:00.000Z');
		expect(result).toBe('2:20 PM');
	});

	it('should format empty date correctly', () => {
		const result = formatTime('');
		expect(result).toBe('');
	});
});

describe('formatDateTime', () => {
	beforeEach(() => {
		vi.stubEnv('TZ', 'UTC');
	});

	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it('should format date correctly in German', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-DE');
		const result = formatDateTime('2025-10-09T14:20:00.000Z');
		expect(result).toBe('09.10.2025, 14:20');
	});

	it('should format date correctly in English', () => {
		vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
		const result = formatDateTime('2025-10-09T14:20:00.000Z');
		expect(result).toBe('Oct 9, 2025, 2:20 PM');
	});

	it('should format empty date correctly', () => {
		const result = formatDateTime('');
		expect(result).toBe('');
	});
});

describe('formatDateForInput', () => {
	it('should format date correctly', () => {
		const result = formatDateForInput('2025-10-09T14:20:00.000Z');
		expect(result).toBe('2025-10-09');
	});

	it('should format empty date correctly', () => {
		const result = formatDateForInput('');
		expect(result).toBe('');
	});
});
