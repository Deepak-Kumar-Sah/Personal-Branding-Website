import React from 'react';
import './NavigationBar.css';
import Quotes from "../Quotes/quotes";
import Button from "../Buttons/Buttons";
import {
   
    Link
} from 'react-router-dom';
// window.onscroll=function(){Scrolling()};
// function Scrolling(){
 
// if(document.documentElement.scrollTop>200){
//     console.log("nav disappear"); 
// }
// else {
//     console.log("nav appear");
// }
// }

export default class NavigationBar extends React.Component{
    render(){
        return(
            <div>
            <div className="box1">
                <div>    
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Journey</li>
                    <div className="nandita">NANDITA SHARMA</div>
                    <li>Poem</li>
                    <li>Join me</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="content">
                <Quotes/>
                <Button/>
            </div>
           </div>
           <div>
           <h3>Sticky Navigation Bar Example</h3>

            </div>
            </div>
        );
    }
}