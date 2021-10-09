import React from 'react';
import './main.css';
import Sidebar from '../sideBar/sideBar';
import Demo from './section/demo';
class Main extends React.Component {
    render() { 
        return (
            <div className="main">
                <Sidebar/>
                <Demo/>
            </div>
            
        );
    }
}
 
export default Main;