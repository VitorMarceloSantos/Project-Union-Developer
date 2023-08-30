import { useEffect, useMemo } from 'react';
import { TableUsers } from './TableUsers';
import { GetListUsersType } from '../../types/TableUserType';
import { PAGES_PER_DISPLAY } from '../../utils/PagesPerDisplay';

export const GetListUsers = ({ userState, userPagination, usersFiltered }: GetListUsersType) => {
	const { stateUsers, handlerSetUsers } = userState; // useContext(UsersContext)
	const { usersPagination, setUsersPagination } = userPagination; // state Component Home
	const verifyFilterUsers = usersFiltered.length !== 0 ? usersFiltered : usersPagination;

	const QTDE_USERS = 100;
	const URL = `https://randomuser.me/api/?results=${QTDE_USERS}`;

	const UpdateData = () => {
		setUsersPagination(stateUsers.slice(0, PAGES_PER_DISPLAY));
	};

	const GetData = async () => {
		const response = await fetch(URL);
		const listUsers = await response.json();
		handlerSetUsers(listUsers.results);
		setUsersPagination(listUsers.results.slice(0, PAGES_PER_DISPLAY));
		// usersPagination já inicia com o conteúdo que será exibido na primeira página
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
					() => (stateUsers.length !== 0 ? <TableUsers users={verifyFilterUsers} /> : <p>Carregando ...</p>),
					[verifyFilterUsers],
				)}
			</section>
		</>
	);
};
