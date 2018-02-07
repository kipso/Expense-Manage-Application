import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboard = () => (
	<div>
		<ExpensesSummary />
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default ExpenseDashboard;