export const strToBool = (value: string | undefined) => {
	if (!value) {
		return false;
	}

	return value.toLowerCase() === 'true';
};
