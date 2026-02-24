export const formatCopyright = (copyright?: string) => {
	copyright = copyright?.replaceAll('(c)', '©');
	copyright = copyright?.replaceAll('(year)', new Date().getFullYear().toString());
	copyright = copyright?.replaceAll('<3', '❤️');
	copyright = copyright?.replaceAll('(dot)', '•');
	return copyright;
};
