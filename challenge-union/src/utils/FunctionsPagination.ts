import { PAGES_PER_DISPLAY } from '../components/listUsers/GetListUsers';
import {
	CalculationTotalPagesType,
	CreatePaginationType,
	PaginationSetPagesType,
	SelectUsersPaginationType,
} from '../types/PaginationTypes';
import { UserType } from '../types/UserType';

export const HandlerBackPages = ({ pageInitial, setPageInitial, setPageFinally }: PaginationSetPagesType) => {
	setPageFinally(pageInitial - 1);
	setPageInitial((current) => current - 5);
};

export const HandlerNextPages = ({ pageFinally, setPageInitial, setPageFinally }: PaginationSetPagesType) => {
	setPageInitial(pageFinally + 1);
	setPageFinally((current) => current + 5);
};

export const CreatePaginationNumbers = ({ pageInitial, pageFinally, setPaginationNumbers }: CreatePaginationType) => {
	const arrayPages = [];
	for (let i = pageInitial; i <= pageFinally; i += 1) {
		arrayPages.push({ page: i });
	}
	setPaginationNumbers(arrayPages);
};

export const CalculationTotalPages = ({ users, setPageTotal, createPagination }: CalculationTotalPagesType) => {
	setPageTotal(Math.floor(users.length / PAGES_PER_DISPLAY));
	CreatePaginationNumbers({ ...createPagination });
	// Foi utilizado o Math.floor para caso o resultado seja um fracionario, o arrendodamento será para cima(número inteiro), sendo assim comportando todos os elementos da lista.
};

export const SelectUsersPagination = ({ page, paginationMenu }: SelectUsersPaginationType) => {
	const { users, setUsersPagination } = paginationMenu;
	let newList: UserType[] = [];
	if (page === 1) {
		newList = users.slice(0, page * PAGES_PER_DISPLAY);
	} else {
		newList = users.slice(page * PAGES_PER_DISPLAY - PAGES_PER_DISPLAY, page * PAGES_PER_DISPLAY);
	}
	setUsersPagination(newList);
};
