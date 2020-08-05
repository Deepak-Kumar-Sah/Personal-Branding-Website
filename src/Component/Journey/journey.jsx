import React from 'react';
import './journey.css';
import hello from "./journey.jpg";
export default class Journey  extends React.Component{
    render(){
        return(
            <div className ="hello" >
            <img src={hello}/>
            <div className="centered">BE A PART OF MY JOURNEY </div> 
            <button class="buton">Read More... </button>
         </div>
         );
        }
    }