import React, { Component } from 'react'
import TextInput from './TextInput'
import { Consumer } from '../context';

export default class EditItem extends Component {

    nameRef = React.createRef();
    cpRef = React.createRef();
    spRef = React.createRef();

 

    handleSubmit = (e,id,dispatch) => {
        e.preventDefault();
        const item = {};
        item.id = id;
        item.name = this.nameRef.current.value;
        item.cp = this.cpRef.current.value;
        item.sp = this.spRef.current.value;
        dispatch({
            type: 'EDIT_ITEM',
            payload: item
        })
        this.props.history.push('/')
    }
    
    render() {
        const { id } = this.props.match.params;
        return (
            <Consumer>
               {value => {
                   const { items, dispatch } = value;
                   const item = items.filter(el => el.id == id)[0];
                   console.log(dispatch)
                   return (
                    <div className = "card container p-0 mb-5">
                        <div className = "card-header text-center">Edit Item</div>
                        <div className="card-body">
                            <form onSubmit = {(e) => this.handleSubmit(e,id,dispatch)}>
                            <div className = "form-group">
                                <label htmlFor = "name">Name</label>
                                <input
                                    type = "text"
                                    name = "name"
                                    className = "form-control"
                                    defaultValue = {item.name}
                                    ref = {this.nameRef}
                                />                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "cp">Cost Price</label>
                                <input
                                    type = "text"
                                    name = "cp"
                                    className = "form-control"
                                    defaultValue = {item.cp}
                                    ref = {this.cpRef}
                                />                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "sp">Selling Price</label>
                                <input
                                    type = "text"
                                    name = "sp"
                                    className = "form-control"
                                    defaultValue = {item.sp}
                                    ref = {this.spRef}
                                />                                
                            </div>                         
                                <input
                                    type = "submit"
                                    value= "Submit" 
                                    className = "btn btn-block btn-success "
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
