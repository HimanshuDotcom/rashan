import React, { Component } from 'react'
import Item from './Item';
import { Consumer } from '../context';

class Items extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { items, loading } = value.getState();
                    return (
                        <>
                            <h1 
                                className = "text-center mb-4 display-3">
                                <span className = "text-danger ">Items</span> List
                            </h1>
                            {loading && <h1 className = "text-center mt-5">Loading Items .....</h1>}
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
