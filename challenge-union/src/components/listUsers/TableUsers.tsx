import { TableUserType } from '../../types/TableUserType';
import { FormattedDate } from '../../utils/FormattedDate';
import { GenerateIdUser } from '../../utils/GenerateIdUser';

export const TableUsers = ({ users }: TableUserType) => {
	return (
		<table>
			<tr>
				<th>ID</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Title</th>
				<th>Date</th>
				<th>Age</th>
				<th>Actions</th>
			</tr>
			{users.map((user, index) => (
				<tr key={index}>
					<td>{GenerateIdUser(user.login.uuid)}</td>
					<td>{user.name.first}</td>
					<td>{user.name.last}</td>
					<td>{user.name.title}</td>
					<td>{FormattedDate(user.dob.date)}</td>
					<td>{user.dob.age}</td>
					<td>
						<button>View profile</button>
					</td>
				</tr>
			))}
		</table>
	);
};
