import {
	CalculationTotalPagesType,
	CreatePaginationType,
	PaginationSetPagesType,
	SelectUsersPaginationCurrentType,
	SelectUsersPaginationType,
} from '../types/PaginationTypes';
import { UserType } from '../types/UserType';
import { PAGES_PER_DISPLAY } from './PagesPerDisplay';

export const HandlerBackPages = ({ pageInitial, setPageInitial, setPageFinally }: PaginationSetPagesType) => {
	setPageFinally(pageInitial - 1);
	setPageInitial((current) => current - 5);
};

export const HandlerNextPages = ({ pageFinally, setPageInitial, setPageFinally }: PaginationSetPagesType) => {
	setPageInitial(pageFinally + 1);
	setPageFinally((current) => current + 5);
};

export const CreatePaginationNumbers = ({
	pageInitial,
	pageFinally,
	handlerSetPaginationNumbers,
}: CreatePaginationType) => {
	const arrayPages = [];
	for (let i = pageInitial; i <= pageFinally; i += 1) {
		arrayPages.push({ page: i });
	}
	handlerSetPaginationNumbers({ paginationNumbers: arrayPages });
};

export const CalculationTotalPages = ({ stateUsers, setPageTotal, createPagination }: CalculationTotalPagesType) => {
	setPageTotal(Math.floor(stateUsers.length / PAGES_PER_DISPLAY));
	CreatePaginationNumbers({ ...createPagination });
	// Foi utilizado o Math.floor para caso o resultado seja um fracionario, o arrendodamento será para cima(número inteiro), sendo assim comportando todos os elementos da lista.
};

export const SelectUsersPaginationCurrent = ({
	paginationMenu,
	valueInitialCurrent,
}: SelectUsersPaginationCurrentType) => {
	const { stateUsers, setUsersPagination } = paginationMenu;
	let newList: UserType[] = [];
	if (valueInitialCurrent !== 0) {
		newList = stateUsers.slice(
			valueInitialCurrent * PAGES_PER_DISPLAY - PAGES_PER_DISPLAY,
			valueInitialCurrent * PAGES_PER_DISPLAY,
		);
	}
	setUsersPagination(newList);
};

export const SelectUsersPagination = ({
	page,
	paginationMenu,
	handlerSetPaginationNumbers, // valueInitialCurrent,
}: SelectUsersPaginationType) => {
	const { stateUsers, setUsersPagination } = paginationMenu;
	let newList: UserType[] = [];
	if (page === 1) {
		newList = stateUsers.slice(0, page * PAGES_PER_DISPLAY);
	} else {
		newList = stateUsers.slice(page * PAGES_PER_DISPLAY - PAGES_PER_DISPLAY, page * PAGES_PER_DISPLAY);
	}

	setUsersPagination(newList);
	handlerSetPaginationNumbers({ currentPage: page });
};
