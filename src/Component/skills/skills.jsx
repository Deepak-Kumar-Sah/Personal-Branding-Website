import  React from 'react';
import hello from '../images/Human.jpg';
import './skills.css';

export default class Skill extends React.Component{
    render(){
        return(
            <div>
                 <div className ='img'>
               <img src = {hello}/>

           </div>
           <div className = 'title '>
               <h1>
                   A HUMAN
               </h1>
               <p>
                This is story of a woman, who has always lived in two different worlds. 
                One where life was perfect, it was made of pure good, everything was beautiful,
                and everyone was appreciative about her. This was the world of her thoughts, 
                this was her home, where she was locked up most of time. 
                Keeping all the doors and windows shut most of time. 

               </p>

           </div>
          
          
           </div>
        );
    }
}