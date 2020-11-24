import React from 'react';
import apiClient from '../services/api';
import Categories from './Categories';

export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category:'',

        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {

        event.preventDefault();

        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/api/addCategory', {
                    name: this.state.category
         
                })



            });

    }

    handleChangeCat = (event) => {
        this.setState({ category: event.target.value });
        
    }


    render(){



        return(

    <form align="center" onSubmit={(e)=>{this.handleSubmit(e)}}>
              
            <input type="text" placeholder="Enter Category Name" value={this.state.value} onChange={this.handleChangeCat} />
               
               
                <input className="btn btn-dark" type="submit" value="Add"  />
            </form>

        );
    }
}

