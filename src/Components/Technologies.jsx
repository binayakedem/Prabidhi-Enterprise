import React, { Component } from "react";
import Slider from "react-slick";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container mx-4 md:mx-12 lg:mx-24 bg-gray-100 py-4">
        <h1 className="text-center font-bold text-2xl my-10 pt-3">Our Technologies are</h1>
      <Slider {...settings} >
        <div>
          <div className="overflow-hidden p-1 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767746.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767590.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767629.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767686.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767565.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645177737.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645608891.svg" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/technology/1645767608.svg" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
