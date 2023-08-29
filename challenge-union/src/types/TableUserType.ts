import { Dispatch, SetStateAction } from 'react';
import { UserType } from './UserType';

export type TableUserType = {
	users: UserType[];
};

export type UserStateType = {
	users: UserType[];
	setUsers: Dispatch<SetStateAction<UserType[]>>;
};

export type UserPaginationType = {
	usersPagination: UserType[];
	setUsersPagination: Dispatch<SetStateAction<UserType[]>>;
};

export type GetListUsersType = {
	userState: UserStateType;
	userPagination: UserPaginationType;
	usersFiltered: UserType[];
};
