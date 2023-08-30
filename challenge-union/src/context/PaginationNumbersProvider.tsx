import { useState } from 'react';
import { ChildrenType } from '../types/ChildrenType';
import { PaginationNumbersContext } from './PaginationNumbersContext';
import { PaginationOrCurrentPageType } from '../types/ContextType';

export const PaginationNumbersProvider = ({ children }: ChildrenType) => {
	const [pagination, setPaginationNumbers] = useState<PaginationOrCurrentPageType>({
		currentPage: 0,
		paginationNumbers: [],
	});

	const handlerSetPaginationNumbers = (listNumbersOrCurrentPage: PaginationOrCurrentPageType) => {
		const newObject: PaginationOrCurrentPageType = {...pagination, ...listNumbersOrCurrentPage}
		setPaginationNumbers(newObject);
	};
	return (
		<PaginationNumbersContext.Provider value={{ pagination, handlerSetPaginationNumbers }}>
			{children}
		</PaginationNumbersContext.Provider>
	);
};
