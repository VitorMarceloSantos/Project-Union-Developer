import { useEffect, useMemo } from 'react';
import { TableUsers } from './TableUsers';
import { GetListUsersType } from '../../types/TableUserType';

export const PAGES_PER_DISPLAY = 10;
const QTDE_USERS = 100;
const URL = `https://randomuser.me/api/?results=${QTDE_USERS}`;

export const GetListUsers = ({ userState, userPagination }: GetListUsersType) => {
	const { users, setUsers } = userState;
	const { usersPagination, setUsersPagination } = userPagination;

	const GetData = async () => {
		const response = await fetch(URL);
		const listUsers = await response.json();
		setUsers(listUsers.results);
		setUsersPagination(listUsers.results.slice(0, 10));
	};
	useEffect(() => {
		try {
			GetData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<section>
				{useMemo(
					() => (users.length ? <TableUsers users={usersPagination} /> : <p>Carregando ...</p>),
					[usersPagination],
				)}
			</section>
		</>
	);
};
