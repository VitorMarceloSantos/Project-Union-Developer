import { createContext } from 'react';
import { PaginationNumbersContextType } from '../types/ContextType';

export const PaginationNumbersContext = createContext<PaginationNumbersContextType>({
	paginationNumbers: [],
	handlerSetPaginationNumbers: () => [],
});
