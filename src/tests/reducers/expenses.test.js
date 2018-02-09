import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state',()=>{
	const state = expensesReducer(undefined,{ type: '@@INIT' });
	expect(state).toEqual([]);
});

test('Should remove expense id', ()=>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses,action);
	expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expense if id not found ', ()=>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses,action);
	expect(state).toEqual(expenses);
});

test('Should add expenses ', ()=>{
	const expense = {
		id:'109',
		description:'laptop',
		note:'',
		amount:29500,
		createdAt:20000
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses,action);
	expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense ', ()=>{
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses,action);
	expect(state[1].amount).toBe(amount);
});

test('Should not edit an expense if id not found', ()=>{
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses,action);
	expect(state).toEqual(expenses);
});

test('should set expenses', ()=>{
	const action = {
		type:'SET_EXPENSES',
		expenses:[expenses[1]]
	};
	const state = expensesReducer(expenses,action);
	expect(state).toEqual([expenses[1]]);
});