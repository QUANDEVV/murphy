import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlides = () => {
      slides.forEach((slide, index) => {
        slide.style.opacity = index === currentIndex ? '1' : '0';
      });
    };

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 6000); // Change slide every 6 seconds

    showSlides();

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <section className="relative container mx-auto py-12">
      <div className="relative overflow-hidden h-[600px] flex justify-center items-center rounded-lg shadow-lg">
        <div className="slide absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Auction 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 p-5 rounded-lg">
            <p className="text-lg text-white">Welcome to</p>
            <h2 className="text-3xl font-bold text-white">Murphy Merchants Auctioneers</h2>
          </div>
        </div>
        <div className="slide absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out">
          <img
            src="https://media.istockphoto.com/id/917901978/photo/gavel-on-auction-word.jpg?s=612x612&w=0&k=20&c=e5mnLUG2UEg6y8zfO1zc7Gi4Ed8PEEeV3eGeYOKxKBI="
            alt="Auction 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 p-5 rounded-lg">
            <p className="text-lg text-white">Welcome to</p>
            <h2 className="text-3xl font-bold text-white">Murphy Merchants Auctioneers</h2>
          </div>
        </div>
        <div className="slide absolute w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Auction 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 p-5 rounded-lg">
            <p className="text-lg text-white">Welcome to</p>
            <h2 className="text-3xl font-bold text-white">Murphy Merchants Auctioneers</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
