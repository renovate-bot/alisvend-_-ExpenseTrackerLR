import React from 'react';
import apiClient from '../services/api';
import Categories from './Categories';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
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
            apiClient.post('/api/updateExpense', {
                id:this.state.id,
                category_id: this.state.category,
                amount:this.state.amount,
                date: this.state.date
                
                
            })
            
          
            
        });
        
    }

    submit=(e)=>{
       
        this.handleSubmit(e);
        // this.props.onAddExpense();
    }
    render() {
        return (
            
            <form onSubmit={(e)=>{this.submit(e)}}>
                <label>
                    Date
            <input type="date" value={this.state.value} onChange={this.handleChangeDate} />
                </label>
                <label>
                    Amount:
            <input type="number" value={this.state.value} onChange={this.handleChangeAmount} />
                </label>
                <label>
                    Category:
                    
            
                <Categories onChangeCatId={this.handleChangeCatId} {...this.props} loggedIn={true} />
                </label>
                <input type="submit" value="Submit"  />
            </form>
            
        );
    }
}

