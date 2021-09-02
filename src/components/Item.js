import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    <li>Cost Price : 41</li>
                    <li>Selling Price : 48</li>
                </ul>
            </div>
        )
    }
}

export default Item;