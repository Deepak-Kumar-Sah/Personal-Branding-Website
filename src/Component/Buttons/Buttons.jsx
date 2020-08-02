import React from "react";
import "./buttons.css";
export default class Button extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:700,//500 diifference
                    left:0,
                    behavior:'smooth'
                })}>A Human</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:1200,
                    left:0,
                    behavior:'smooth'
                })}>The Alchemist</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:1700,
                    left:0,
                    behavior:'smooth'
                })}>The Philosopher</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:2200,
                    left:0,
                    behavior:'smooth'
                })}>An Entrepreneur</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:2700,
                    behavior:'smooth'
                })}>An Artist</button>
                </div>

            </div>
        );
    }
}