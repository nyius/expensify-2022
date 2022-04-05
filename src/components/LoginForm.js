import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

const LoginForm = ({ dispatch }) => {
	return (
		<div className="login_form">
			<input type="text" autoFocus placeholder="Enter username"></input>
			<input type="password" placeholder="Enter password"></input>
			<button>Log in</button>
			<button onClick={() => dispatch(startLogin())}>Login With Google</button>
		</div>
	);
};

export default connect()(LoginForm);
