import React from 'react';
import './Poem.css';
import facebook  from "../../Assets/Images/facebook.png" ;
export default class Poem extends React.Component{
    render(){
        return(
                 
            // <div className="titles_poem">
                // <h1>PRETTY KETTLE OF POEM</h1>
                  <div className="box_poem">
                 
                 
                 <div className="img_poem"> 
                     <img src={facebook}/> 
                 </div> 
                     
                <div className="title_poem">
                <h3> Poem 1 </h3>
                </div>
                
                <div className="content_poem">
                
                A woman who flow...<br/>
                With time..<br/>
                With life...<br/>
                With seasons...<br/>

                A woman who dreams...<br/>
                In day..<br/>
                In night....<br/>
                In dark and in light..<br/>

                A woman who smiles....<br/>
                With breeeze<br/>
                With rain<br/>
                Whenever she sees a moving train...<br/>

                She laughs,<br/>
                She cries,<br/>
                Whenever she falls,<br/>
                She gets up,<br/>
                Pat her back and says<br/>
                "Well done.. it was a nice try" ..<br/>
                </div>
                
            </div>
        );
    }
    }