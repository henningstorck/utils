export const formatDate = (dateString: string | undefined) => {
	return formatInternal(dateString, 'medium', undefined);
};

export const formatTime = (dateString: string | undefined) => {
	return formatInternal(dateString, undefined, 'short');
};

export const formatDateTime = (dateString: string | undefined) => {
	return formatInternal(dateString, 'medium', 'short');
};

const formatInternal = (
	dateString: string | undefined,
	dateStyle: 'full' | 'long' | 'medium' | 'short' | undefined,
	timeStyle: 'full' | 'long' | 'medium' | 'short' | undefined
) => {
	if (!dateString) {
		return '';
	}

	const language = navigator.language || 'en-US';
	const format = new Intl.DateTimeFormat(language, { dateStyle, timeStyle });
	return format.format(new Date(dateString));
};

export const formatDateForInput = (dateString?: string) => {
	if (!dateString) {
		return '';
	}

	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};
