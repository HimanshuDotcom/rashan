import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';

class Item extends Component {
    state = {
        showInfo: false,
    }

    showItem = () => {
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
        }))
    }

    deleteItem = (id, dispatch) => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }

    render() {
        const {id, name, cp , sp} = this.props.item;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
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
                                    onClick = {() => this.deleteItem(id, dispatch)}
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
                }}
            </Consumer>
        )
        
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item;