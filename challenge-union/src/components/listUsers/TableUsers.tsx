import { useNavigate } from 'react-router-dom';
import { TableUserType } from '../../types/TableUserType';
import { FormattedDate } from '../../utils/FormattedDate';
import { GenerateIdUser } from '../../utils/GenerateIdUser';
import { UserType } from '../../types/UserType';

export const TableUsers = ({ users }: TableUserType) => {
	const navigate = useNavigate();

	const HandlerNavegateUser = (user: UserType) => {
		navigate(`/user-details/${user.name.first}`, { state: user });
	};

	return (
		<table>
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
							<button onClick={() => HandlerNavegateUser(user)}>View profile</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
