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
        return (
            <div className="card card-body mb-3">
                <h4>
                    {this.props.name}
                    <i
                        onClick={this.showItem}
                        className="ml-1 fa fa-sort-down"
                        style={{ cursor: "pointer" }}></i>
                </h4>
                {this.state.showInfo ?
                    (<ul className="list-group">
                        <li className="list-group-item">Cost Price : {this.props.cp}</li>
                        <li className="list-group-item">Selling Price : {this.props.sp}</li>
                    </ul>)
                    :
                    null
                }

            </div>
        )
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    cp: PropTypes.number.isRequired,
    sp: PropTypes.number.isRequired
}

export default Item;