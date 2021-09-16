import React, { Component } from 'react'
import Item from './Item';

class Items extends Component {

    state = {
        items: [
            {
                id: 1,
                name: "Sugar",
                cp: 36,
                sp: 38
            },
            {
                id: 2,
                name: "Bura",
                cp: 41,
                sp: 48
            }
        ]
    };
    deleteItem = (id) => {
        const { items } = this.state;
        const updatedItems = items.filter(item => item.id !== id);
        this.setState({
            items: updatedItems
        })

    }
    render() {
        const { items } = this.state;
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
    }
}
export default Items;
