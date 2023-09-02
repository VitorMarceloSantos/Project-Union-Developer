import { useLocation, NavLink } from 'react-router-dom';
import { UserType } from '../types/UserType';

export const DetailsUser = () => {
	const { state } = useLocation();
	const userDetail = state.user as UserType;
	// Realizando a tipagem do state para receber os tipos de User.

	return (
		<div className='details-user'>
			<div className='details-user-navlink-div'>
				<NavLink className='details-user-navlink-div-link' to='/'>
					Back
				</NavLink>
			</div>
			<article className='details-user-profile'>
				<div className='details-user-profile-image'>
					<img src={userDetail.picture.large} alt='My Photo' />
				</div>
				<h2 className='details-user-profile-title text-color-1'>{`${userDetail.name.first} ${userDetail.name.last}`}</h2>
				<p className='text-color-2'>{userDetail.name.title}</p>
			</article>
			<hr className='details-user-line' />
			<section className='details-user-informations'>
				<div className='details-user-informations-generic'>
					<h2 className='text-color-3 details-user-informations-generic-title'>Info</h2>
					<div className='details-user-informations-generic-display'>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Firt Name</p>
							<p className='text-color-2'>{userDetail.name.first}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Last Name</p>
							<p className='text-color-2'>{userDetail.name.last}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Gender</p>
							<p className='text-color-2'>{userDetail.gender}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Age</p>
							<p className='text-color-2'>{userDetail.dob.age}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Phone</p>
							<p className='text-color-2'>{userDetail.phone}</p>
							<p className='text-color-2'>{userDetail.cell}</p>
						</div>
					</div>
				</div>
				<div className='details-user-informations-generic'>
					<h2 className='text-color-3 details-user-informations-generic-title'>Location</h2>
					<div className='details-user-informations-generic-display'>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Street</p>
							<p className='text-color-2'>{`${userDetail.location.street.name} - ${userDetail.location.street.number}`}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>City</p>
							<p className='text-color-2'>{userDetail.location.city}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>State</p>
							<p className='text-color-2'>{userDetail.location.state}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Country</p>
							<p className='text-color-2'>{userDetail.location.country}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>PostCode</p>
							<p className='text-color-2'>{userDetail.location.postcode}</p>
						</div>
					</div>
				</div>
				<div className='details-user-informations-generic'>
					<h2 className='text-color-3 details-user-informations-generic-title'>Login</h2>
					<div className='details-user-informations-generic-display'>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Username</p>
							<p className='text-color-2'>{userDetail.login.username}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Email</p>
							<p className='text-color-2'>{userDetail.email}</p>
						</div>
						<div className='details-user-informations-generic-display-unit'>
							<p className='text-color-1'>Password</p>
							<p className='text-color-2'>{userDetail.login.password}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
