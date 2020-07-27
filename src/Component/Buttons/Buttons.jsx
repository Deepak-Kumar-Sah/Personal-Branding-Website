import React from "react";
import "./buttons.css";
export default class Button extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="button">
                <button >A Human</button>
                </div>
                <div className="button">
                <button >An Artist</button>
                </div>
                <div className="button">
                <button >An Alchemist</button>
                </div>
                <div className="button">
                <button >An Entrepreneur</button>
                </div>
                <div className="button">
                <button >A Philosopher</button>
                </div>

            </div>
        );
    }
}