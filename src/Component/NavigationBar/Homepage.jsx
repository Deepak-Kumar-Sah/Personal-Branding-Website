import React from 'react';
import NavigationBar from "./NavigationBar";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
export default class Nav extends React.Component{
    
    render(){
        return(
           <Router>
                <Route exact path="/" component={NavigationBar}/>
                {/* <Route path="/a" component={Philosopher} onClick={()=>{}}/>
                <Route path="/aHuman" component={Human}/> */}
           </Router>
        );
    }
}