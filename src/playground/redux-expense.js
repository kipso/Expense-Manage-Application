import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Action Generators
//Add Expense

const addExpense = (
	{ 
		description = '', 
		note ='', 
		amount =0, 
		createdAt= 0
	} = {}
) => ({
	type:'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

//Remove Expense

const removeExpense = ( { id } = {} ) => ({
	type:'REMOVE_EXPENSE',
	id
});

//Edit expense

const editExpense = ( id, updates) => ({
	type:'EDIT_EXPENSE',
	id,
	updates
});

//Set Text Filter
const setTextFilter = ( text = '' ) => ({
	type:'SET_TEXT_FILTER',
	text
});

//Sort By Date
const sortByDate = () => ({
	type:'SORT_BY_DATE'
});


//sort By Amount
const sortByAmount = () => ({
	type:'SORT_BY_AMOUNT'
});

//Set Start Date 
const setStartDate = (startDate = undefined) => ({
	type:'SET_START_DATE',
	startDate
});

//Set End Date 
const setEndDate = (endDate = undefined) => ({
	type:'SET_END_DATE',
	endDate
});

//Expense Reducer

const expensesReducerDefault = [];

const expensesReducer = (state=expensesReducerDefault,action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
			...state,
			action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id );
		case 'EDIT_EXPENSE':
			return state.map((expense)=>{
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};


//Filter Reducer

const filtersReducerDefault = {
	text:'',
	sortBy:'date',
	startDate:undefined,
	endDate:undefined
};

const filtersReducer = (state=filtersReducerDefault,action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text:action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy:'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy:'amount'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate:action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate:action.endDate
			}
		default:
			return state;
	}
}; 

//Get Visible expenses
const getVisibleExpenses = ( expenses, { text, sortBy, startDate,endDate } ) =>  {
	return expenses.filter((expense)=>{
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		else if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

//Store creation
const store = createStore(
	combineReducers({
		expenses:expensesReducer,
		filters:filtersReducer
	})
);

store.subscribe(()=>{
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description:'Rent', amount:1000,createdAt:1000}));

const expenseTwo = store.dispatch(addExpense({ description:'Hotel', amount:500,createdAt:1500}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:200}));

// store.dispatch(setTextFilter('el'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));

// store.dispatch(setEndDate());

const demo = {
	expenses:[{
		id:'qwerty',
		description:'Rent',
		note:'This is the Rent amount',
		amount: 6500,
		createdAt:0
	}],
	filters:{
		text:'Rent',
		sortBy:'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};
