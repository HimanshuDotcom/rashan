import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <h4>{this.props.name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">Cost Price : 41</li>
                    <li className="list-group-item">Selling Price : 48</li>
                </ul>
            </div>
        )
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Item;