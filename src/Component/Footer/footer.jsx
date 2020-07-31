import React  from "react";
import "./footer.css";
import Facebook from "../../Assets/Images/facebook.png";
import Instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import twitter from "../../Assets/Images/twitter.png";
import PlayButton from "../../Assets/Images/play-button.png";
import Call from "../../Assets/Images/call.png";
import Mail from "../../Assets/Images/mail.png";
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer" >
                    <div className="getintouch">
                    <h2>Get In Touch</h2>
                    <div className="call">
                    <img src={Call} /><span>+91 797308010813</span>
                    </div>
                    <div className="call">
                    <img src={Mail} /><span>abc@gmail.com</span>
                    </div>
                    </div>
               <div className="footer-logo">
                   <img src={linkedin} alt="link_logo"/>
                   <img src={Instagram} alt="insta_logo"/>
                   <img src={Facebook} alt="fb_logo"/>
                   <img src={twitter} alt="twitter_logo"/>
                   <img src={PlayButton} alt="play_logo"/>
                   <p className="copywrite">@copywrite 2020</p>
               </div>
               <div className="newsletter">
                   <h2>NEWSLETTER SIGNUP</h2>
                   <p>By Subscribing to our mailing list you will always be <br/>
                   updated with the latest news from us</p>
                   <div className="align">
                   <input type="text" placeholder="Enter your e-mail" name="email" className="input"></input>
                   <button className="subscribe" onClick={()=>{}}>Subscribe</button>
                   </div>
                   <br/><br/>
               </div>
                </div>
            </div>
        );
    }
}