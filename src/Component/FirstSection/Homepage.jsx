import React from 'react';
import FirstSection from "./FirstSection";
import About from "../about/About";
import AboutPg from "../AboutPage/Aboutpg";
import human from "../Human/human";
import alchemist from "../alchemist/alchemist";
import philosopher from "../Philosopher/philosopher";
import entrepreneur from "../euntre/euntre";
import artist from "../artist/artist";
// import Second_Navigation_Bar from "../../Component/NavType_2/Second_Navigation_Bar";
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
                <Route path="/aboutpg" component={AboutPg}/>
                <Route path="/about" component={About}/>
                <Route  path="/human" component={human}/>
                <Route  path="/alchemist" component={alchemist}/>
                 <Route exact path="/philosopher" component={philosopher}/>
                 <Route  path="/entrepreneur" component={entrepreneur}/>
                 <Route  path="/artist" component={artist}/>
           </Router>
        );
    }
}