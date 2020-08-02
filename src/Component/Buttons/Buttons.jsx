import React from "react";
import "./buttons.css";
export default class Button extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:310,//150 initial
                    left:0,
                    behavior:'smooth'
                })}>A Human</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:620,//150 initial
                    left:0,
                    behavior:'smooth'
                })}>The Alchemist</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:930,//150 initial
                    left:0,
                    behavior:'smooth'
                })}>The Philosopher</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:1240,//150 initial
                    left:0,
                    behavior:'smooth'
                })}>An Entrepreneur</button>
                </div>
                <div className="button1">
                <button onClick={()=>window.scrollBy({
                    top:1510,//150 initial
                    left:0,
                    behavior:'smooth'
                })}>An Artist</button>
                </div>

            </div>
        );
    }
}