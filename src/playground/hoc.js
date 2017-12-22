//Higher Order Component -hoc

//A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is : {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent)=>{
	return (props) => (
		<div>
			{props.isAdmin && <p>This is Private info.</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuth ? (
				<WrappedComponent {...props} />
			) : (
				<p>login to view thecomponent</p>
			)}
			
		</div>
	);
};



const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="The details" />,document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuth={true} info="The details" />,document.getElementById('app'));