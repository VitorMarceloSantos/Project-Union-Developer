import { PaginationType } from './PaginationTypes';
import { UserType } from './UserType';

export type UserContextType = {
	stateUsers: UserType[];
	handlerSetUsers: (listUsers: UserType[]) => void;
};

export type PaginationNumbersContextType = {
	paginationNumbers: PaginationType[];
	handlerSetPaginationNumbers: (listNumbers: PaginationType[]) => void;
};
