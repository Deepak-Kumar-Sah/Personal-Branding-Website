import React from 'react';
import './nav.css';
import {
    Link
} from 'react-router-dom';
export default class TopBar extends React.Component{
    constructor(props){
    super(props);
    this.state={
        isSticky:false,
        currentScrollPos:0,
    }
    }
    
    render(){
        window.onscroll=function(){myFunction()};
        const myFunction=()=>{
            if(window.scrollY<this.state.currentScrollPos && window.scrollY!==0){
                this.state.isSticky=true;
            }
            else{
                this.state.isSticky=false;
            }
            this.setState({currentScrollPos:window.scrollY});
        }
        return(
            <div className="myNav">
                <div className={this.state.isSticky ? 'navbox1' : "navbox2"}>    
                <ul className="fisrt_ul">
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link to="/" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Home</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"} ><Link onClick={()=>window.scrollBy({
                    top:700,//500 diifference
                    left:0,
                    behavior:'smooth'
                })} className={this.state.isSticky ? 'anchor1' : "anchor2"}>About</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link onClick={()=>window.scrollBy({
                    top:4100,//500 diifference
                    left:0,
                    behavior:'smooth'
                })} className={this.state.isSticky ? 'anchor1' : "anchor2"}>Journey</Link></li>
                    <div className={this.state.isSticky ? 'nandita1' : "nandita2"}>NANDITA SHARMA</div>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link onClick={()=>window.scrollBy({
                    top:1100,//500 diifference
                    left:0,
                    behavior:'smooth'
                })}  className={this.state.isSticky ? 'anchor1' : "anchor2"}>Poem</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"} ><Link onClick={()=>window.scrollBy({
                    top:4100,
                    behavior:'smooth'
                })}  className={this.state.isSticky ? 'anchor1' : "anchor2"}>Join me</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"} ><Link onClick={()=>window.scrollBy({
                    top:4100,
                    behavior:'smooth'
                })} className={this.state.isSticky ? 'anchor1' : "anchor2"}>Contact</Link></li>
                </ul>
            </div>
           </div>
        );
    }
}