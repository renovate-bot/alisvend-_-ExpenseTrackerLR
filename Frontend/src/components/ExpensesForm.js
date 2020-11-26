import React from 'react';
import apiClient from '../services/api';
import Categories from './Categories';

export default class ExpensesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            amount: '',
            category: ''



        };

        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChangeDate = (event) => {
        this.setState({ date: event.target.value });
    }
    handleChangeAmount = (event) => {
        this.setState({ amount: event.target.value });

    }

    handleChangeCatId = categories => {


        this.setState({ category: categories });

    }



    handleSubmit(event) {

        event.preventDefault();

        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/api/addExpense', {
                    category_id: this.state.category,
                    amount: this.state.amount,
                    date: this.state.date


                })



            });

    }

    submit = (e) => {

        this.handleSubmit(e);
        this.props.onAddExpense();
    }
    render() {
        return (<div className="shadow p-3 mb-5 formBackground rounded " ><form onSubmit={(e) => { this.submit(e) }}>
            <table className="table table-striped">

                <thead className='thead-dark'>
                    <tr align='center'>

                        <th colSpan="5" ><b><h4>Add Expense</h4></b></th>

                    </tr>
                </thead>

                <tbody>
                    <td></td>

                    <td>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Enter Amount" value={this.state.value} onChange={this.handleChangeAmount} />
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </td>
                    <td><Categories onChangeCatId={this.handleChangeCatId} {...this.props} loggedIn={true} /></td>
                    <td><input className="form-control" type="date" value={this.state.value} onChange={this.handleChangeDate} /></td>

                    <td><input className="btn btn-dark" type="submit" value="Submit" /></td>
                </tbody>
            </table></form></div>

            // <form onSubmit={(e)=>{this.submit(e)}}>
            //     <label>
            //         Date
            // <input type="date" value={this.state.value} onChange={this.handleChangeDate} />
            //     </label>
            //     <label>
            //         Amount:
            // <input type="number" value={this.state.value} onChange={this.handleChangeAmount} />
            //     </label>
            //     <label>
            //         Category:


            //     <Categories onChangeCatId={this.handleChangeCatId} {...this.props} loggedIn={true} />
            //     </label>
            //     <input type="submit" value="Submit"  />
            // </form>

        );
    }
}

