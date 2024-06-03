import React, { Component } from "react";
import Slider from "react-slick";

function Clients() {
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
    <div className="slider-container mx-4 md:mx-12 lg:mx-24 bg-[#001636] py-4 mt-10">
        <h1 className="text-center font-bold text-2xl mb-10 pt-3 text-white">Our Lovely Clients are</h1>
      <Slider {...settings} >
        <div>
          <div className="overflow-hidden p-1 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1645769056.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1647245369.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1647245646.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1647246155.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1647246276.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1645768981.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1645768981.png" alt="" />
          </div>
        </div>
        <div>
        <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img className="h-full w-auto object-cover" src="https://prabidhienterprises.com/images/clients/1647245164.png" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Clients;
