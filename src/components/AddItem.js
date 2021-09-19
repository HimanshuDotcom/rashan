import React, { Component } from "react";
import  TextInput  from './TextInput';
import { Consumer } from '../context';

class AddItem extends Component {

    state = {
        name : '',
        cp: '',
        sp: ''
    };

    handleSubmit = (e,dispatch) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: this.state
        })
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        const {name, cp, sp} = this.state;
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
                                    />
                                    <TextInput
                                        label = "Cost Price"
                                        name = "cp"
                                        type = "number"
                                        placeholder = "Enter Cost Price"
                                        onChange = {this.handleInput}
                                        value = {cp} 
                                    />
                                    <TextInput
                                        label = "Selling Price"
                                        name = "sp"
                                        type = "number"
                                        placeholder = "Enter Selling Price"
                                        onChange = {this.handleInput}
                                        value = {sp} 
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