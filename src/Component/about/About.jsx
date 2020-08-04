import React from 'react';
import './About.css';
export default class About extends React.Component{
    render(){
        return(
            <div className="about">
                
                <div className="box">
                <div className="title">
                <h2>About Nandita </h2>
                </div>

                <div className="content">
                 Nandita Sharma is an activist scholar whose research is shaped by the social 
                 movements she is active in, including No Borders  movements and those struggling
                 for the planetary commons. She is the author of Home Economics: Nationalism and 
                 the Making of ‘Migrant Workers’ in Canada (University of Toronto Press, 2006) 
                 and Home Rule: National Sovereignty and the Separation of Natives and Migrants
                 (Duke University Press, 2020).
                </div>
               
                

                </div>
                <div className="buttona">
                <button > read more </button>
                </div>

            </div>
        );
    }
    }