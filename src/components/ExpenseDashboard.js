import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';

const ExpenseDashboard = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default ExpenseDashboard;