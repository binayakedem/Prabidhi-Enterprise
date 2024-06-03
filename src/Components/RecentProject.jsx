import React, { Component } from "react";
import Slider from "react-slick";

function  RecentProject() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
  };
  return (
    <div className="slider-container mx-4 md:mx-12 lg:mx-24 mt-20 ">
      <Slider {...settings}>
        <div>
           <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1683099609.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Navratna Ayurvet health care and research center</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
        <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1647247045.jpg" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
        <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1682926444.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
        <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1682936338.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
        <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1683021701.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, recusandae.</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
        <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 my-8">
            <div className="w-full overflow-hidden" >
                <img className="w-full h-auto object-cover" src="https://prabidhienterprises.com/images/projects/1683022431.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl text-[#0347AB] my-4">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam asperiores reiciendis debitis quia animi natus voluptatum, mollitia itaque sunt error et atque architecto quae ipsum corrupti ex temporibus quas repellendus cupiditate ipsa fuga incidunt. Iste obcaecati optio ad velit consequatur repellendus ea illo earum a, quia expedita maiores fugiat magnam sit assumenda quaerat sint dolor et nobis, aut dolorem id quos commodi. Iure, a, ratione facere placeat voluptates temporibus doloribus asperiores quia itaque dignissimos aut magnam ipsa dolore excepturi odio nam, assumenda eaque ullam eius fuga dicta veritatis minima?</p>
                <a href="https://cestnepal.org/" target="_blank" className="font-semibold text-[#0347AB] ">Learn More</a>
            </div>

           </div>
        </div>
      </Slider>
    </div>
  );
}

export default RecentProject;
