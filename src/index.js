import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from "./Component/FirstSection/Homepage";
import SimpleSlider from "./Component/BackgroundImage/BackgroundImage"
//import * as serviceWorker from './serviceWorker';
// import Aboutpg from "./Component/about/Aboutpg"
// import Poem from "./Component/poem/Poem"
//  import About from "./Component/about/About"
ReactDOM.render(
  <React.StrictMode>
    <Homepage/>
    {/* <SimpleSlider/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
