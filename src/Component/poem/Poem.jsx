import React from 'react';
import './Poem.css';
import ab from "../../Assets/Images/ab.jpg" ;
export default class Poem extends React.Component{
    render(){
        return(
            
            <div className="poem">
                <h1>PRETTY KETTLE OF POEM</h1>
                 <div className="box">
                 
                 
                <div className='ab'>
                     <img src={ab}/>
                     </div>
                <div className="title">
                <h3> Poem 1 </h3>
                </div>
                
                <div className="content">
                What I like about other people’s apartments is that the way
                objects are arranged in space is given, I can only
                In my own apartment what makes me nervous is the opposite –
                nothing is definitive.
                As in life. Fragile, vulnerable the way things are
                today.
                I could, theoretically, move anything
                at any time. My things, clothes, wardrobes and tables
                are suffused with the provisional nature of my existence
                here on earth, with my uncertainty, my mortality.
                I uncritically accept all aquariums belonging to other people
                (as long as there is no plastic castle inside)
                </div>
                </div>
                
            </div>
        );
    }
    }