import { useState } from 'react';
import { ChildrenType } from '../types/ChildrenType';
import { PaginationNumbersContext } from './PaginationNumbersContext';
import { PaginationType } from '../types/PaginationTypes';

export const PaginationNumbersProvider = ({ children }: ChildrenType) => {
	const [paginationNumbers, setPaginationNumbers] = useState<PaginationType[]>([]);

	const handlerSetPaginationNumbers = (listUsers: PaginationType[]) => {
		setPaginationNumbers(listUsers);
	};
	return (
		<PaginationNumbersContext.Provider value={{ paginationNumbers, handlerSetPaginationNumbers }}>
			{children}
		</PaginationNumbersContext.Provider>
	);
};
