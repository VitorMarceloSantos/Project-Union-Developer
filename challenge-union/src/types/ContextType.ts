import { PaginationType } from './PaginationTypes';
import { UserType } from './UserType';

export type UserContextType = {
	stateUsers: UserType[];
	handlerSetUsers: (listUsers: UserType[]) => void;
};

export type PaginationOrCurrentPageType = {
	paginationNumbers?: PaginationType[];
	currentPage?: number;
};

export type PaginationNumbersContextType = {
	pagination: PaginationOrCurrentPageType;
	handlerSetPaginationNumbers: (listNumbersOrCurrentPage: PaginationOrCurrentPageType) => void;
};
