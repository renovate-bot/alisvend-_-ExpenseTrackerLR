import React from 'react';
import apiClient from '../services/api';
import EditForm from './EditForm';
import ExpensesForm from './ExpensesForm';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

 class Expense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: []

        };
   


    }
    fetchExpenses(){
        if (this.props.loggedIn) {
            apiClient.get('sanctum/csrf-cookie').then(() => apiClient.get('/api/expenses')
                .then(response => {
                    const expenses = response.data;
                    this.setState({ expenses });
                })
                .catch(error => console.error(error)
                ))

        }}
    componentDidMount = (props) => {
       this.fetchExpenses();
    }
    
    handleAddExpense= ()=> {
        
        this.fetchExpenses();
      
       
    }
    handleDeleteExpense = ( id) => {
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/api/deleteExpense', {
                    id:id
                }


                )
                const expenses = this.state.expenses.filter(item => item.id !== id);
                this.setState({ expenses });
            });
    }

    // handleEditExpense= ()=> {
        
    //     <Route path='/editExpense' render={props => (
    //         <EditForm {...props} loggedIn={true} /> )} />
       
    // }

    render() {
        if (this.props.loggedIn) {
            return (

                <>
                    <ExpensesForm onAddExpense={this.handleAddExpense} />
                    <table className="table table-striped">
                        <thead className='thead-dark'>
                            <tr>
                                <th>#</th>

                                <th>Amount</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {this.state.expenses.map((expense) => {
                                return (
                                    <tr key={expense.id}>
                                        <td>{expense.id}</td>
                                        <td>{expense.amount} $</td>
                                        <td>{expense.category.name}</td>
                                        <td>{expense.date}</td>
                                        <td>
                                       
                                        {/* <svg href="/editExpense" width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
  <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg> */}
    
    {/* { const backUrl = '/editExpense'} */}
    <Link to={{pathname: `/editExpense`}}>Edit</Link>
    {/* <button href="/editExpense" data-key= {expense.id }
                          className="mr-3">
        Edit
    </button> */}
                                            <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  onClick={(e) => { this.handleDeleteExpense(expense.id) }}>
           <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" /> 
                                         </svg>
                                        
                                        </td>
                                    </tr>);
                            })}
                        </tbody></table>
                </>

            );
        }
        return (
            <div className="alert alert-warning">You are not logged in.</div>
        );

    }

}

export default Expense;