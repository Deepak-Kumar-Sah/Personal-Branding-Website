import React from 'react';
import './FirstSection.css';
import Quotes from "../Quotes/quotes";
import Button from "../Buttons/Buttons";
import TopBar from "../TopBar/nav";
import Footer from "../Footer/footer";
import Ahuman from "../../Assets/Images/human.jpg";
import {
  Link
} from 'react-router-dom';
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
           <div className="body">
           <div className="About-Nandita">
               <h2>About Nandita</h2>
               <p>This is an extraordinary story of an ordinary girl. Many have seen her but no one understood. 
                   Who she really is? Under the multiple layers of people's perspective.And her journey,
                 crossing multiple roads filled with various twists, highs and lows. How she found the elixir of life “The everlasting
                 source of love”.And her enigmatic relationship with universe and effervescent wisdom….
                 This is an extraordinary story of an ordinary girl. Many have seen her but no one understood. 
                   Who she really is? Under the multiple layers of people's perspective.And her journey,
                 crossing multiple roads filled with various twists, highs and lows. How she found the elixir of life “The everlasting
                 source of love”.And her enigmatic relationship with universe and effervescent wisdom….</p>
           </div>
           <div className="left">
             <div><img src={Ahuman} className="left-img"/></div>
               <p className="left-content">
                 <h2>A Human</h2>
                 This is story of a woman, who has always lived in two different worlds. One where life was perfect, it was made of pure good, everything was
                  beautiful, and everyone was appreciative about her. This was the world of her thoughts, this was her home, where she was locked up most of time.
                  Keeping all the doors and windows shut most of time.
                  And then there was the outer world. Filled with beautiful shades of black white and grays ..
                  First she entered there as a young ambitious girl and then emerged as a strong successful woman.
                She was juggling the multiple hats of a daughter, wife mother , professional, entrepreneur and The boss, trying to be the best in everything. She
                wanted to prove herself, achieve unmatched heights, She was doing day by day. Competing with the world and herself, this was a non-stop run,
                fatigue was building,she started losing, losing herself, her laughter, her smile, her health and her sense of judgement.<br/>
                <button className="Read-more"><Link to="/human" className="anchor">Read More...</Link></button></p>
           </div>
           <br/>
           <div className="right">
             <div><img src={Ahuman} className="right-img"/></div>
               <p className="right-content">
                 <h2>The Alchemist</h2>
                 This is story of a woman, who has always lived in two different worlds. One where life was perfect, it was made of pure good, everything was
                  beautiful, and everyone was appreciative about her. This was the world of her thoughts, this was her home, where she was locked up most of time.
                  Keeping all the doors and windows shut most of time.
                  And then there was the outer world. Filled with beautiful shades of black white and grays ..
                  First she entered there as a young ambitious girl and then emerged as a strong successful woman.
                She was juggling the multiple hats of a daughter, wife mother , professional, entrepreneur and The boss, trying to be the best in everything. She
                wanted to prove herself, achieve unmatched heights, She was doing day by day. Competing with the world and herself, this was a non-stop run,
                fatigue was building,she started losing, losing herself, her laughter, her smile, her health and her sense of judgement.<br/>
                <br/><button className="right-Read-more"><Link to="/alchemist" className="anchor">Read More...</Link></button>
                </p>
           </div>
           <br/>
           <div className="left">
             <div><img src={Ahuman} className="left-img"/></div>
               <p className="left-content">
                 <h2>The Philosopher</h2>
                 This is story of a woman, who has always lived in two different worlds. One where life was perfect, it was made of pure good, everything was
                  beautiful, and everyone was appreciative about her. This was the world of her thoughts, this was her home, where she was locked up most of time.
                  Keeping all the doors and windows shut most of time.
                  And then there was the outer world. Filled with beautiful shades of black white and grays ..
                  First she entered there as a young ambitious girl and then emerged as a strong successful woman.
                She was juggling the multiple hats of a daughter, wife mother , professional, entrepreneur and The boss, trying to be the best in everything. She
                wanted to prove herself, achieve unmatched heights, She was doing day by day. Competing with the world and herself, this was a non-stop run,
                fatigue was building,she started losing, losing herself, her laughter, her smile, her health and her sense of judgement.<br/>
                <button className="Read-more"><Link to="/philosopher" className="anchor">Read More...</Link></button></p>
           </div>
           <br/>
           <div className="right">
             <div><img src={Ahuman} className="right-img"/></div>
               <p className="right-content">
                 <h2>An Entrepreneur</h2>
                 This is story of a woman, who has always lived in two different worlds. One where life was perfect, it was made of pure good, everything was
                  beautiful, and everyone was appreciative about her. This was the world of her thoughts, this was her home, where she was locked up most of time.
                  Keeping all the doors and windows shut most of time.
                  And then there was the outer world. Filled with beautiful shades of black white and grays ..
                  First she entered there as a young ambitious girl and then emerged as a strong successful woman.
                She was juggling the multiple hats of a daughter, wife mother , professional, entrepreneur and The boss, trying to be the best in everything. She
                wanted to prove herself, achieve unmatched heights, She was doing day by day. Competing with the world and herself, this was a non-stop run,
                fatigue was building,she started losing, losing herself, her laughter, her smile, her health and her sense of judgement.<br/>
                <br/><button className="right-Read-more"><Link to="/entrepreneur" className="anchor">Read More...</Link></button>
                </p>
           </div>
           <br/>
           <div className="left">
             <div><img src={Ahuman} className="left-img"/></div>
               <p className="left-content">
                 <h2>An Artist</h2>
                 This is story of a woman, who has always lived in two different worlds. One where life was perfect, it was made of pure good, everything was
                  beautiful, and everyone was appreciative about her. This was the world of her thoughts, this was her home, where she was locked up most of time.
                  Keeping all the doors and windows shut most of time.
                  And then there was the outer world. Filled with beautiful shades of black white and grays ..
                  First she entered there as a young ambitious girl and then emerged as a strong successful woman.
                She was juggling the multiple hats of a daughter, wife mother , professional, entrepreneur and The boss, trying to be the best in everything. She
                wanted to prove herself, achieve unmatched heights, She was doing day by day. Competing with the world and herself, this was a non-stop run,
                fatigue was building,she started losing, losing herself, her laughter, her smile, her health and her sense of judgement.<br/>
                <button className="Read-more"><Link to="/artist" className="anchor">Read More...</Link></button></p>
           </div>
           <br/>

           </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}