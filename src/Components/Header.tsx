import React from 'react';


const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
            <a className="navbar-brand" href="#">Tal.ly</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Header;