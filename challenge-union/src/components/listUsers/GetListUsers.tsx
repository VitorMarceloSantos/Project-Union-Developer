import { useEffect, useMemo, useState } from 'react';
import { UserType } from '../../types/UserType';
import { TableUsers } from './TableUsers';
const QTDE_USERS = 10;
const URL = `https://randomuser.me/api/?results=${QTDE_USERS}`;

export const GetListUsers = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	async function GetData() {
		const response = await fetch(URL);
		const listUsers = await response.json();
		setUsers(listUsers.results);
	}
	useEffect(() => {
		GetData();
	}, []);
	return (
		<section>{useMemo(() => (users.length ? <TableUsers users={users} /> : <p>Carregando ...</p>), [users])}</section>
	);
};
