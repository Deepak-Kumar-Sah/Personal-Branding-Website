import React from "react";
import "./buttons.css";
export default class Button extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:1700,//500 diifference
                    left:0,
                    behavior:'smooth'
                })}>A Human</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:2100,
                    left:0,
                    behavior:'smooth'
                })}>The Alchemist</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:2600,
                    left:0,
                    behavior:'smooth'
                })}>The Philosopher</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:3100,
                    left:0,
                    behavior:'smooth'
                })}>An Entrepreneur</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:3600,
                    behavior:'smooth'
                })}>An Artist</button>
                </div>

            </div>
        );
    }
}