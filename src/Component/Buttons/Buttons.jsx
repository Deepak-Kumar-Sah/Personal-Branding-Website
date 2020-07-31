import React from "react";
import "./buttons.css";
export default class Button extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="button1">
                <button >A Human</button>
                </div>
                <div className="button1">
                <button >An Artist</button>
                </div>
                <div className="button1">
                <button >An Alchemist</button>
                </div>
                <div className="button1">
                <button >An Entrepreneur</button>
                </div>
                <div className="button1">
                <button >A Philosopher</button>
                </div>

            </div>
        );
    }
}