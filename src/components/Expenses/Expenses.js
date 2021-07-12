import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {


    const[pickedYear, setPickedYear] = useState('2019');

    const yearChangeHandler = (selectedYear) => {
        setPickedYear(selectedYear);
        }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === pickedYear; 
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    picked={pickedYear}
                    onChangeYear={yearChangeHandler}
                />
                <ExpensesChart 
                    expenses={filteredExpenses}
                />
                <ExpensesList
                    items={filteredExpenses}
                />
             </Card>
        </div>
    )

}

export default Expenses;

