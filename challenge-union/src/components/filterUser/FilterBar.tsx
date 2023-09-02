import { useState } from 'react';
import { UserFilterType } from '../../types/FilterTypes';

export const FilterBar = ({ filterProps }: UserFilterType) => {
	const { usersPagination, setUsersFiltered } = filterProps;
	const [userSearch, setUserSearch] = useState<string>('');

	const HandlerFindUser = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		// A busca está senda realizado pelo First Name.
		const { target } = event;
		const targetInputLower = target.value.toLowerCase();
		const filtered = usersPagination.filter(({ name }) => name.first.toLocaleLowerCase().includes(targetInputLower));
		// Find: caso não encontre nenhum resultado será retornado undefined,
		// Caso o input esteja vazio(target.value), será atribuido um array vazio [].
		if (filtered.length !== undefined && target.value.length !== 0) {
			setUsersFiltered(filtered);
		} else {
			setUsersFiltered([]);
		}
		setUserSearch(target.value);
	};

	return (
		<section className='filter-user-bar'>
			<input type='text' placeholder='Search user...' value={userSearch} onChange={(event) => HandlerFindUser(event)} />
		</section>
	);
};
