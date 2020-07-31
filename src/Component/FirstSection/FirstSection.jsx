import React from 'react';
import './FirstSection.css';
import Quotes from "../Quotes/quotes";
import Button from "../Buttons/Buttons";
import TopBar from "../TopBar/nav";
import Footer from "../Footer/footer";
export default class FirstSection extends React.Component{
    render(){
        return(
            <div>
            <div className="box1">
             <div>
                 <TopBar/>
             </div>
            <div className="content">
                <Quotes/>
                <Button/>
            </div>
           </div>
           <p>This is an extraordinary story of an ordinary girl. Many have seen her but no one understood. 
                Who she really is? Under the multiple layers of people's perspective.And her journey, crossing 
                multiple roads filled with various twists, highs and lows. How she found the elixir of life 
                “The everlasting source of love”.And her enigmatic relationship with universe and effervescent wisdom….
                </p>
                <p>This is an extraordinary story of an ordinary girl. Many have seen her but no one understood. 
                Who she really is? Under the multiple layers of people's perspective.And her journey, crossing 
                multiple roads filled with various twists, highs and lows. How she found the elixir of life 
                “The everlasting source of love”.And her enigmatic relationship with universe and effervescent wisdom….
                </p>
                <p className="para1">This is an extraordinary story of an ordinary girl. Many have seen her but no one understood. 
                Who she really is? Under the multiple layers of people's perspective.And her journey, crossing 
                multiple roads filled with various twists, highs and lows. How she found the elixir of life 
                “The everlasting source of love”.And her enigmatic relationship with universe and effervescent wisdom….
                </p>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}