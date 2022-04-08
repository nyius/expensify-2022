import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = ({ dispatch }) => {
	return (
		<div className="login_form">
			<button className="btn-login" onClick={() => dispatch(startLogin())}>
				<FaGoogle /> Login With Google
			</button>
		</div>
	);
};

export default connect()(LoginForm);
