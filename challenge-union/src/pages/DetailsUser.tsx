import { NavLink, useNavigate, useParams } from 'react-router-dom';

export const DetailsUser = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	return (
		<section>
			{/* <NavLink to={'/'}>Back</NavLink>
			<button onClick={() => navigate('/')}>Back</button>
			<div></div> */}
			<p>{slug}</p>
		</section>
	);
};
