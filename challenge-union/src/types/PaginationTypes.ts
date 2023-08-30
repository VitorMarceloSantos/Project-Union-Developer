import { Dispatch, SetStateAction } from 'react';
import { UserType } from './UserType';
import { PaginationOrCurrentPageType } from './ContextType';

export type PaginationType = {
	page: number;
};

export type PaginationMenuProps = {
	stateUsers: UserType[];
	setUsersPagination: Dispatch<SetStateAction<UserType[]>>;
};

export type PaginationSetPagesType = {
	pageInitial: number;
	pageFinally: number;
	setPageInitial: Dispatch<SetStateAction<number>>;
	setPageFinally: Dispatch<SetStateAction<number>>;
};

export type CreatePaginationType = {
	pageInitial: number;
	pageFinally: number;
	handlerSetPaginationNumbers: (listNumbers: PaginationOrCurrentPageType) => void;
};

export type CalculationTotalPagesType = {
	stateUsers: UserType[];
	setPageTotal: Dispatch<SetStateAction<number>>;
	createPagination: CreatePaginationType;
};

export type SelectUsersPaginationType = {
	paginationMenu: PaginationMenuProps;
	page: number;
	handlerSetPaginationNumbers: (listNumbers: PaginationOrCurrentPageType) => void;
};

export type SelectUsersPaginationCurrentType = {
	paginationMenu: PaginationMenuProps;
	valueInitialCurrent: number;
};
