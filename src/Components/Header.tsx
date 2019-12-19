import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
declare var FB: any;

const Header: React.FC = () => {
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem('kumander_token');
        redirectToLogin();
    }

    const redirectToLogin = () => {
        history.push('/login');
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
            <a className="navbar-brand" href="#">Kumander - Your personal financial micromanager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Actions
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Account</DropdownItem>
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </nav>
        
    );
}

export default Header;