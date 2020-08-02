import React from 'react';
import FirstSection from "./FirstSection";
import About from "../../About/about";
import Ahuman from "../Human/human"
import Second_Navigation_Bar from "../../Component/NavType_2/Second_Navigation_Bar";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
export default class Nav extends React.Component{
    
    render(){
        return(
           <Router>
                <Route exact path="/" component={FirstSection}/>
                <Route path="/about" component={Ahuman} onClick={()=>{}}/>
           </Router>
        );
    }
}