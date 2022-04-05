import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startLogout } from '../actions/authActions';

const LogoutButton = ({ dispatch }) => {
	let navigate = useNavigate();

	async function handleCLick(e) {
		e.preventDefault();
		await dispatch(startLogout());
		navigate('/');
	}

	return <button onClick={handleCLick}>Logout</button>;
};

export default connect()(LogoutButton);
