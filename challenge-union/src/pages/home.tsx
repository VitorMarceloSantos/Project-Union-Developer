import { useState } from 'react';
import { UserType } from '../types/UserType';
import { GetListUsers } from '../components/listUsers/GetListUsers';
import { PaginationMenu } from '../components/pagination/PaginationMenu';

export const Home = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [usersPagination, setUsersPagination] = useState<UserType[]>([]);

	return (
		<main>
			<GetListUsers userState={{ users, setUsers }} userPagination={{ usersPagination, setUsersPagination }} />
			<PaginationMenu users={users} setUsersPagination={setUsersPagination} />
		</main>
	);
};
