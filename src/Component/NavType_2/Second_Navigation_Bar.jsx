import React from 'react';
import './Second_Navigation_Bar.css';
import {
    
    Link
} from 'react-router-dom';
import Ahuman from "../Human/human";
export default class TopBar extends React.Component{
    render(){
        return(
            <div>
                <div className="parent_div">    
                <ul className="new_nav">
                    <li><Link to="/" className="anchor">Home</Link></li>
                    <li><Link to="/human" className="anchor">A Human</Link></li>
                    <li><Link to="/alchemist" className="anchor">The Alchemist</Link></li>
                    <li><Link to="/philosopher" className="anchor">The Philosopher</Link></li>
                    <li><Link to="/Entrepreneur" className="anchor">An Entrepreneur</Link></li>
                    <li><Link to="/artist" className="anchor">An Artist</Link></li>
                </ul>
            </div>

           </div>
        );
    }
}