import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cover1 from "../../Assets/Images/Cover1.jpg";
import cover2 from "../../Assets/Images/Cover2.jpg";
import cover3 from "../../Assets/Images/Cover3.jpg";
export default class SimpleSlider extends React.Component{
    render() {
        const settings = {
          dots: true,
          autoplay:true,
          infinite: true,
          adaptiveHeight: true,
          speed: 500,
          slidesToShow: 1,
          sidesToSlcroll: 1
          
          
        };
        return (

          <div className="slider-wrapper">
            
            <Slider {...settings}>
              <div className="MySlide">
                <img src={cover1} className="MySlide"/>
              </div>
              <div >
                <img src={cover2} className="MySlide"/>
              </div>
              <div >
                <img src={cover3} className="MySlide"/>
              </div>
              {/* <div className="MySlide">
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div> */}
            </Slider>
          </div>
        );
      }
}