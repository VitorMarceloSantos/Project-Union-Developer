import { UserFilterType } from '../../types/FilterTypes';
import { FilterBar } from './FilterBar';

export const FilterUser = ({ filterProps }: UserFilterType) => {
	return (
		<header className='filter-user'>
			<h1>List Users</h1>
			<FilterBar filterProps={filterProps} />
		</header>
	);
};
