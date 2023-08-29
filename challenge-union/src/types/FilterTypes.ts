import { Dispatch, SetStateAction } from 'react';
import { UserType } from './UserType';

export type UserFilterType = {
	filterProps: {
		usersPagination: UserType[];
		setUsersFiltered: Dispatch<SetStateAction<UserType[]>>;
	};
};
