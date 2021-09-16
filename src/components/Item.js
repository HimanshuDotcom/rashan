import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    state = {
        showInfo: false,
    }

    showItem = () => {
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
        }))
    }

    render() {
        const {name, cp , sp} = this.props.item;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        onClick={this.showItem}
                        className="ml-1 mr-auto fa fa-sort-down"
                        style={{ cursor: "pointer" }}>
                    </i>
                    <i
                        className=" fa fa-times"
                        onClick = {this.props.deleteItem}
                        style = {{ float: 'right', cursor: 'pointer', color: 'red' }}
                        >
                    </i>
                </h4>
                {this.state.showInfo ?
                    (<ul className="list-group">
                        <li className="list-group-item">Cost Price : {cp}</li>
                        <li className="list-group-item">Selling Price : {sp}</li>
                    </ul>)
                    :
                    null
                }

            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Item;