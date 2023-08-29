import { Dispatch, SetStateAction } from 'react';
import { UserType } from './UserType';

export type PaginationType = {
	page: number;
};

export type PaginationMenuProps = {
	users: UserType[];
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
	setPaginationNumbers: Dispatch<SetStateAction<PaginationType[]>>;
};

export type CalculationTotalPagesType = {
	users: UserType[];
	setPageTotal: Dispatch<SetStateAction<number>>;
	createPagination: CreatePaginationType;
};

export type SelectUsersPaginationType = {
	paginationMenu: PaginationMenuProps;
	page: number;
};
