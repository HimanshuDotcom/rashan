import React, { Component } from "react";
import  TextInput  from './TextInput';
import { Consumer } from '../context';

class AddItem extends Component {

    state = {
        name : '',
        cp: '',
        sp: '',
        errors: {
            name: '',
            cp: '',
            sp: ''
        }
    };

    handleSubmit = (e,dispatch) => {
        e.preventDefault();
        const {name, cp, sp} = this.state;
        // check Errors 
        if(name === '') {
            this.setState({errors: {name : "Name is required"}});
            return;
        }
        if(cp === '') {
            this.setState({errors: {cp : "Cost Price is required"}});
            return;  
        }
        if(sp === ''){
            this.setState({errors: {sp : "Selling Price is required"}});
            return;
        }
        dispatch({
            type: 'ADD_ITEM',
            payload: this.state
        })
        this.setState({
            name: '',
            cp: '',
            sp: ''
        })
        this.props.history.push('/')
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        const {name, cp, sp, errors} = this.state;
        this.setState()
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className = "card container p-0 mb-5">
                            <div className = "card-header text-center">Add Item</div>
                            <div className="card-body">
                                <form onSubmit = {(e) => this.handleSubmit(e, dispatch)}>
                                    <TextInput
                                        label = "Name"
                                        name = "name"
                                        type = "text"
                                        placeholder = "Enter item name"
                                        onChange = {this.handleInput}
                                        value = {name} 
                                        error = {errors.name}
                                    />
                                    <TextInput
                                        label = "Cost Price"
                                        name = "cp"
                                        type = "number"
                                        placeholder = "Enter Cost Price"
                                        onChange = {this.handleInput}
                                        value = {cp}
                                        error = {errors.cp} 
                                    />
                                    <TextInput
                                        label = "Selling Price"
                                        name = "sp"
                                        type = "number"
                                        placeholder = "Enter Selling Price"
                                        onChange = {this.handleInput}
                                        value = {sp} 
                                        error = {errors.sp}
                                    />
                                    <input 
                                        type = "submit"
                                        value = "Add Item"
                                        className = "btn btn-success btn-block"
                                    />
                                </form>
                            </div>            
                        </div>
                    )
                }}
            </Consumer>
        )
       
    }
}

export default AddItem;