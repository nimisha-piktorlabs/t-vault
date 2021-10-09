import React, { Component } from 'react';
import './header.css';

class Header extends React.Component {
    render() { 
        return (
            <header className="header">
                <div className="headerLeft">
                    Logo
                </div>
                <div className="headerRight">
                    <p>Home</p>
                    <p>Contact</p>
                </div>
            </header>
        );
    }
}
 
export default Header;