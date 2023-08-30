import { useContext, useEffect, useMemo, useState } from 'react';
import { PaginationMenuProps } from '../../types/PaginationTypes';
import {
	CalculationTotalPages,
	CreatePaginationNumbers,
	HandlerBackPages,
	HandlerNextPages,
	SelectUsersPagination,
	SelectUsersPaginationCurrent,
} from '../../utils/FunctionsPagination';
import { PaginationNumbersContext } from '../../context/PaginationNumbersContext';

export const PaginationMenu = ({ stateUsers, setUsersPagination }: PaginationMenuProps) => {
	const {
		pagination: { currentPage, paginationNumbers },
		handlerSetPaginationNumbers,
	} = useContext(PaginationNumbersContext);
	const valueInitialPage = paginationNumbers && paginationNumbers.length !== 0 ? paginationNumbers[0].page : 1;
	const valueFinallyPage =
		paginationNumbers && paginationNumbers.length !== 0 ? paginationNumbers[paginationNumbers.length - 1].page : 5;
	const [pageInitial, setPageInitial] = useState<number>(valueInitialPage);
	const [pageFinally, setPageFinally] = useState<number>(valueFinallyPage);
	const [pagesTotal, setPageTotal] = useState<number>(0);
	const valueInitialCurrent = currentPage && currentPage !== 0 ? currentPage : 1;

	useEffect(() => {
		CalculationTotalPages({
			stateUsers,
			setPageTotal,
			createPagination: { pageInitial, pageFinally, handlerSetPaginationNumbers },
		});
		SelectUsersPaginationCurrent({ paginationMenu: { stateUsers, setUsersPagination }, valueInitialCurrent });
	}, [stateUsers]);

	useEffect(() => {
		CreatePaginationNumbers({ pageInitial, pageFinally, handlerSetPaginationNumbers });
	}, [pageInitial]);

	return (
		<nav>
			{useMemo(
				() =>
					stateUsers.length !== 0 && (
						<ol style={{ display: 'flex' }}>
							<li key='back' style={{ listStyleType: 'none' }}>
								<button
									onClick={() => HandlerBackPages({ pageInitial, pageFinally, setPageInitial, setPageFinally })}
									disabled={pageInitial === 1}
								>
									&#60;
								</button>
							</li>
							{paginationNumbers?.map(({ page }) => (
								<li key={page} style={{ listStyleType: 'none' }}>
									<button
										onClick={() =>
											SelectUsersPagination({
												page,
												paginationMenu: { stateUsers, setUsersPagination },
												handlerSetPaginationNumbers,
											})
										}
									>
										{page}
									</button>
								</li>
							))}
							<li key='next' style={{ listStyleType: 'none' }}>
								<button
									onClick={() => HandlerNextPages({ pageInitial, pageFinally, setPageInitial, setPageFinally })}
									disabled={pageFinally === pagesTotal}
								>
									&#62;
								</button>
							</li>
						</ol>
					),
				[paginationNumbers],
			)}
		</nav>
	);
};
