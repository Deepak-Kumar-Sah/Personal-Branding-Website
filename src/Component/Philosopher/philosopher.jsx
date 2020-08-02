import React from 'react';
import './philosopher.css';
import aPhilosopher from "./image/philosopher.jpg";
import Content from './content';
import Second_Navigation_Bar from "../NavType_2/Second_Navigation_Bar";
export default class Philosopher extends React.Component{
    render(){
        return(
           <div>
                <div className="title">
                <h1>A PHILOSOPHER</h1>
                </div>
                <div>
                   <Second_Navigation_Bar/>
                </div>
                <div className="aPhilosopher">
                    <img src={aPhilosopher}/>
                </div>
                <div>
                    <Content/>
                </div>
           </div>
        );
    }
}
