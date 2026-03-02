export const strToInt = (value: string | undefined, defaultValue = 0) => {
	if (!value) {
		return defaultValue;
	}

	const num = parseInt(value, 10);
	return isNaN(num) ? defaultValue : num;
};

export const strToFloat = (value: string | undefined, defaultValue = 0) => {
	if (!value) {
		return defaultValue;
	}

	const num = parseFloat(value);
	return isNaN(num) ? defaultValue : num;
};
