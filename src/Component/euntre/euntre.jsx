import React from 'react';
import './euntre.css';
// import aHuman from "./image/human.jpg";
import Content from './content';
import Second_Navigation_Bar from "../NavType_2/Second_Navigation_Bar";
import Footer from "../Footer/footer";
import linkedin from "../../Assets/Images/linkedin.png";
import Instagram from "../../Assets/Images/instagram.png";
import Facebook from "../../Assets/Images/facebook.png";
import twitter from "../../Assets/Images/twitter.png";
import PlayButton from "../../Assets/Images/play-button.png";
export default class Euntre extends React.Component{
    componentDidMount(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
    render(){
        return(
           <div>
                <div className="title">
                <h1>A EUNTREPRENUR</h1>
                </div>
                <div> 
                    <Second_Navigation_Bar/>
                </div>
                <div className="header-logo">
                   <a href="https://www.linkedin.com/login"><img src={linkedin} alt="link_logo"/></a>
                   <a href="https://www.instagram.com/"><img src={Instagram} alt="insta_logo"/></a>
                   <a href="https://www.facebook.com/"><img src={Facebook} alt="fb_logo"/></a>
                   <a href="https://twitter.com/explore"><img src={twitter} alt="twitter_logo"/></a>
                   <a href="https://www.youtube.com/"><img src={PlayButton} alt="play_logo"/></a>
               </div>
                <div className="aHuman">
                    {/* <img src={aHuman}/> */}
                </div>
                <div>
                    <Content/>
                </div>
                  <div><Footer/></div>  
           </div>
        );
    }
}
