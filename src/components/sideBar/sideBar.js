import React, { Component } from 'react';
import './sideBar.css';
class Sidebar extends React.Component {
    render() { 
        return (
            <div className="sidebar">
                <div>Members</div>
                <div>Home</div>
                <div>Contacts</div>

            </div>
        );
    }
}
 
export default Sidebar;