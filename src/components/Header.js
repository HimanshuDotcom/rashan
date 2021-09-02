import React from 'react'
import PropTypes from 'prop-types';

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
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
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
