import { useContext, useState } from 'react';
import { UserType } from '../types/UserType';
import { GetListUsers } from '../components/listUsers/GetListUsers';
import { PaginationMenu } from '../components/pagination/PaginationMenu';
import { FilterUser } from '../components/filterUser/FilterUser';
import { UsersContext } from '../context/UsersContext';

export const Home = () => {
	const { stateUsers, handlerSetUsers } = useContext(UsersContext);
	const [usersPagination, setUsersPagination] = useState<UserType[]>([]); // Usado no GetList e PaginationMenu, toda vez que selecionar uma página diferente, o conteúdo será atualizado
	const [usersFiltered, setUsersFiltered] = useState<UserType[]>([]);

	return (
		<main>
			<FilterUser filterProps={{ usersPagination, setUsersFiltered }} />
			<GetListUsers
				userState={{ stateUsers, handlerSetUsers }}
				userPagination={{ usersPagination, setUsersPagination }}
				usersFiltered={usersFiltered}
			/>
			<PaginationMenu stateUsers={stateUsers} setUsersPagination={setUsersPagination} />
		</main>
	);
};
