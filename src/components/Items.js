import React, { Component } from 'react'
import Item from './Item';
import { Consumer } from '../context';

class Items extends Component {

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
