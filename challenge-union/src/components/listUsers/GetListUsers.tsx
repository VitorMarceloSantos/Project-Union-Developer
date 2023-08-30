import { useEffect, useMemo } from 'react';
import { TableUsers } from './TableUsers';
import { GetListUsersType } from '../../types/TableUserType';

export const PAGES_PER_DISPLAY = 10;
const QTDE_USERS = 100;
const URL = `https://randomuser.me/api/?results=${QTDE_USERS}`;

export const GetListUsers = ({ userState, userPagination, usersFiltered }: GetListUsersType) => {
	const { stateUsers, handlerSetUsers } = userState;
	const { usersPagination, setUsersPagination } = userPagination;
	const verifyFilterUsers = usersFiltered.length !== 0 ? usersFiltered : usersPagination;

	const UpdateData = () => {
		setUsersPagination(stateUsers.slice(0, 10));
	};

	const GetData = async () => {
		const response = await fetch(URL);
		const listUsers = await response.json();
		handlerSetUsers(listUsers.results);
		setUsersPagination(listUsers.results.slice(0, 10));
	};
	useEffect(() => {
		try {
			if (stateUsers.length !== 0) {
				UpdateData();
			} else {
				GetData();
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<section>
				{useMemo(
					() => (stateUsers.length ? <TableUsers users={verifyFilterUsers} /> : <p>Carregando ...</p>),
					[verifyFilterUsers],
				)}
			</section>
		</>
	);
};
