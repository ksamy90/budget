import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => { 
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
