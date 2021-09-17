import React, { Component } from 'react'
import Item from './Item';
import { Consumer } from '../context';

class Items extends Component {

    deleteItem = (id) => {
        const { items } = this.state;
        const updatedItems = items.filter(item => item.id !== id);
        this.setState({
            items: updatedItems
        })

    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { items } = value;
                    return (
                        <>
                            {items.map(item => (
                                <Item key={item.id} 
                                    item = {item} 
                                    deleteItem = {() => this.deleteItem(item.id)}
                                />
                            ))}
                         </>
                    )
                }}
            </Consumer>
        )
    }
}
export default Items;
