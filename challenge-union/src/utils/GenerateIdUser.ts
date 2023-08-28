export const GenerateIdUser = (idUnformatted: string) => {
	const idFormatted = idUnformatted.split('-').slice(0, 2).join('');
	return idFormatted;
};
