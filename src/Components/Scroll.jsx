import React, { useState, useEffect } from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";
const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-0 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-50 text-white p-3  shadow-lgtransition duration-300"
        >
          <BsArrowUpSquareFill className='text-blue-500 text-4xl  ' />
        </button>
      )}
    </div>
  );
};

export default Scroll;
