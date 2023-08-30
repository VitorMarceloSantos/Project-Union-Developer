import { useState } from 'react';
import { ChildrenType } from '../types/ChildrenType';
import { UserType } from '../types/UserType';
import { UsersContext } from './UsersContext';

export const UsersProvider = ({ children }: ChildrenType) => {
	const [stateUsers, setStateUsers] = useState<UserType[]>([]);

	const handlerSetUsers = (listUsers: UserType[]) => {
		setStateUsers(listUsers);
	};
	return <UsersContext.Provider value={{ stateUsers, handlerSetUsers }}>{children}</UsersContext.Provider>;
};
