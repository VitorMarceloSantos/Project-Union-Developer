import { Link } from 'react-router-dom';
import { TableUserType } from '../../types/TableUserType';
import { FormattedDate } from '../../utils/FormattedDate';
import { GenerateIdUser } from '../../utils/GenerateIdUser';

export const TableUsers = ({ users }: TableUserType) => {

	return (
		<table className='get-list-user-table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Title</th>
					<th>Date</th>
					<th>Age</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={index}>
						<td>{GenerateIdUser(user.login.uuid)}</td>
						<td>{user.name.first}</td>
						<td>{user.name.last}</td>
						<td>{user.name.title}</td>
						<td>{FormattedDate(user.dob.date)}</td>
						<td>{user.dob.age}</td>
						<td>
							<Link className='get-list-user-table-link' to={`/user-details/${user.name.first}`} state={{ user }}>
								View profile
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
