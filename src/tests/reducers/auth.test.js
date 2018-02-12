import authReducres from '../../reducers/auth';

test('should set uid for login', ()=>{
	const action = {
		type:'LOGIN',
		uid:'abc1234'
	};
	const state = authReducres({},action);
	expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', ()=>{
	const action ={
		type:'LOGOUT'
	};
	const state = authReducres({uid:'something'},action);
	expect(state).toEqual({});
});