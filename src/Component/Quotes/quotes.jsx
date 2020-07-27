import React from 'react';
import "./quotes.css";
export default class Quotes extends React.Component{
    render(){
        return(
            <div className="quote">
                <p>" The way I see it if you want the rainbow,<br/>
                 you gotta put up with the rain. "</p>
                 <div className="name">Nandita Sharma</div>
            </div>
        );
    }
}