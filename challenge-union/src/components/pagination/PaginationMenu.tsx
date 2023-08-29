import { useEffect, useMemo, useState } from 'react';
import { PaginationMenuProps, PaginationType } from '../../types/PaginationTypes';
import {
	CalculationTotalPages,
	CreatePaginationNumbers,
	HandlerBackPages,
	HandlerNextPages,
	SelectUsersPagination,
} from '../../utils/FunctionsPagination';

export const PaginationMenu = ({ users, setUsersPagination }: PaginationMenuProps) => {
	const [pageInitial, setPageInitial] = useState<number>(1);
	const [pageFinally, setPageFinally] = useState<number>(5);
	const [paginationNumbers, setPaginationNumbers] = useState<PaginationType[]>([]);
	const [pagesTotal, setPageTotal] = useState<number>(0);

	useEffect(() => {
		CalculationTotalPages({
			users,
			setPageTotal,
			createPagination: { pageInitial, pageFinally, setPaginationNumbers },
		});
	}, [users]);

	useEffect(() => {
		CreatePaginationNumbers({ pageInitial, pageFinally, setPaginationNumbers });
	}, [pageInitial]);

	return (
		<nav>
			{useMemo(
				() =>
					users.length !== 0 && (
						<ol style={{ display: 'flex' }}>
							<li key='back' style={{ listStyleType: 'none' }}>
								<button
									onClick={() => HandlerBackPages({ pageInitial, pageFinally, setPageInitial, setPageFinally })}
									disabled={pageInitial === 1}
								>
									&#60;
								</button>
							</li>
							{paginationNumbers.map(({ page }) => (
								<li key={page} style={{ listStyleType: 'none' }}>
									<button
										onClick={() => SelectUsersPagination({ page, paginationMenu: { users, setUsersPagination } })}
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
