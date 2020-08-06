import React from 'react';
import './About.css';
import {
    Link
  } from 'react-router-dom';
export default class About extends React.Component{
    render(){
        return(
           <div className="parent_obox_about">
                <div className="obox_about">
             <div className="box_about">
                <div className="title_about">
                <h2>About Nandita </h2>
                </div>

                <div className="content_about">
                 Nandita Sharma is an activist scholar whose research is shaped by the social 
                 movements she is active in, including No Borders  movements and those struggling
                 for the planetary commons. She is the author of Home Economics: Nationalism and 
                 the Making of ‘Migrant Workers’ in Canada (University of Toronto Press, 2006) 
                 and Home Rule: National Sovereignty and the Separation of Natives and Migrants
                 (Duke University Press, 2020).
                </div>
                {/* <button className="about-Read-more_about"><Link to="/aboutpg" className="anchor_about">Read More...</Link> </button> */}
                </div>
                </div>
           </div>
        );
    }
    }