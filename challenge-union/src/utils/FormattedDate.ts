export const FormattedDate = (dateUnformatted: string) => {
	const dateFormatted = dateUnformatted.split('T')[0].split('-').reverse().join('-');
	return dateFormatted;
};
