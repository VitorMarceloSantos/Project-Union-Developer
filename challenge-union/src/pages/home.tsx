import { useState } from 'react';
import { UserType } from '../types/UserType';
import { GetListUsers } from '../components/listUsers/GetListUsers';
import { PaginationMenu } from '../components/pagination/PaginationMenu';
import { FilterUser } from '../components/filterUser/FilterUser';

export const Home = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [usersPagination, setUsersPagination] = useState<UserType[]>([]);
	const [usersFiltered, setUsersFiltered] = useState<UserType[]>([]);
	// const verifyFilterUsers = usersFiltered.length !== 0 ? usersFiltered : usersPagination;
	return (
		<main>
			<FilterUser filterProps={{ usersPagination, setUsersFiltered }} />
			<GetListUsers
				userState={{ users, setUsers }}
				userPagination={{ usersPagination ,setUsersPagination }}
				usersFiltered={usersFiltered}
			/>
			<PaginationMenu users={users} setUsersPagination={setUsersPagination} />
		</main>
	);
};
