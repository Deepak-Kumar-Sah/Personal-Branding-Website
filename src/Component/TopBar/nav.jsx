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
            <div>
                <div className={this.state.isSticky ? 'navbox1' : "navbox2"}>    
                <ul>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link to="/" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Home</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"} ><Link to="/about" className={this.state.isSticky ? 'anchor1' : "anchor2"}>About</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link to="/journey" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Journey</Link></li>
                    <div className={this.state.isSticky ? 'nandita1' : "nandita2"}>NANDITA SHARMA</div>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link to="/poem" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Poem</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"} ><Link to="/join_me" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Join me</Link></li>
                    <li className={this.state.isSticky ? 'menu1' : "menu2"}><Link to="/contact" className={this.state.isSticky ? 'anchor1' : "anchor2"}>Contact</Link></li>
                </ul>
            </div>
           </div>
        );
    }
}