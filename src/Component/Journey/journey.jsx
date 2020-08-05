import React from 'react';
import './journey.css';
import hello from "./journey.jpg";
import {
    Link
  } from 'react-router-dom';
export default class Journey  extends React.Component{
    render(){
        return(
            <div className ="hello" >
            <img src={hello}/>
            <div className="centered">BE A PART OF MY JOURNEY </div> 
            <button class="buton"><Link to="/journey" className="journey-anchor">Read More...</Link></button>
         </div>
         );
        }
    }