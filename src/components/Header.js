import React from 'react'
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const Header = props => {
    return (
        <div>
            <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand">Rashan</a>
                </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to = '/' className = "nav-link">
                                <i className = "fa fa-home"></i> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/additem' className = "nav-link">
                                <i className = "fa fa-plus"></i> Add
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = '/about' className = "nav-link">
                                <i className = "fa fa-question"></i> About
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    name: "Rashan List"
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}



export default Header;
