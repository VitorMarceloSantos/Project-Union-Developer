import { Dispatch, SetStateAction } from 'react';
import { UserType } from './UserType';
import { UserContextType } from './ContextType';

export type TableUserType = {
	users: UserType[];
};

export type UserStateType = {
	users: UserType[];
	setUsers: Dispatch<SetStateAction<UserType[]>>;
};

// export type UserStateType = {
// 	stateUsers: UserType[];
// 	handlerSetUsers: Dispatch<SetStateAction<UserType[]>>;
// };

export type UserPaginationType = {
	usersPagination: UserType[];
	setUsersPagination: Dispatch<SetStateAction<UserType[]>>;
};

export type GetListUsersType = {
	userState: UserContextType;
	userPagination: UserPaginationType;
	usersFiltered: UserType[];
};
