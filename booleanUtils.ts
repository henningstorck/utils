export const strToBool = (value: string | undefined) => {
	if (!value) {
		return false;
	}

	return value.toLowerCase() === 'true';
};

export const formatBool = (value: boolean | undefined, trueText: string, falseText: string) => {
	return value ? trueText : falseText;
};
