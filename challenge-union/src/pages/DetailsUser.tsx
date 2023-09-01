import { useLocation, NavLink } from 'react-router-dom';
import { UserType } from '../types/UserType';

export const DetailsUser = () => {
	const location = useLocation();
	const state = location.state as UserType;
	// Realizando a tipagem do state para receber os tipos de User.

	return (
		<div>
			<NavLink to='/'>Back</NavLink>
			<article>
				<div>
					<img src={state.picture.large} alt='My Photo' />
				</div>
				<h2>{state.name.first}</h2>
				<p>{state.name.title}</p>
			</article>
			<section>
				<div>
					<h2>Info</h2>
					<div className=''>
						<>
							<p>Firt Name</p>
							<p>{state.name.first}</p>
						</>
						<>
							<p>Last Name</p>
							<p>{state.name.last}</p>
						</>
						<>
							<p>Gender</p>
							<p>{state.gender}</p>
						</>
						<>
							<p>Age</p>
							<p>{state.dob.age}</p>
						</>
						<>
							<p>Phone</p>
							<p>{state.phone}</p>
							<p>{state.cell}</p>
						</>
					</div>
				</div>
				<div>
					<h2>Location</h2>
					<div className=''>
						<>
							<p>Street</p>
							<p>{`${state.location.street.name} - ${state.location.street.number}`}</p>
						</>
						<>
							<p>City</p>
							<p>{state.location.city}</p>
						</>
						<>
							<p>State</p>
							<p>{state.location.state}</p>
						</>
						<>
							<p>Country</p>
							<p>{state.location.country}</p>
						</>
						<>
							<p>PostCode</p>
							<p>{state.location.postcode}</p>
						</>
					</div>
				</div>
				<div>
					<h2>Login</h2>
					<div className=''>
						<>
							<p>Username</p>
							<p>{state.login.username}</p>
						</>
						<>
							<p>Email</p>
							<p>{state.email}</p>
						</>
						<>
							<p>Password</p>
							<p>{state.login.password}</p>
						</>
					</div>
				</div>
			</section>
		</div>
	);
};
