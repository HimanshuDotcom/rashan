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
    render() {
        const { items } = this.state;
        return (
            <>
                {items.map(item => (
                    <Item key={item.id} name={item.name} cp={item.cp} sp={item.sp} />
                ))}
            </>
        )
    }
}
export default Items;
