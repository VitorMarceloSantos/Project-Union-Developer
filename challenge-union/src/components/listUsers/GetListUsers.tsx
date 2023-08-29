import { useEffect, useMemo, useState } from 'react';
import { UserType } from '../../types/UserType';
import { TableUsers } from './TableUsers';
import { PaginationMenu } from '../pagination/PaginationMenu';

export const PAGES_PER_DISPLAY = 10;
const QTDE_USERS = 100;
const URL = `https://randomuser.me/api/?results=${QTDE_USERS}`;

export const GetListUsers = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [usersPagination, setUsersPagination] = useState<UserType[]>([]);

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
			<PaginationMenu users={users} setUsersPagination={setUsersPagination} />
		</>
	);
};
