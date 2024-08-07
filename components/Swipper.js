import React, { useEffect } from 'react';

const ImageSlider = () => {
  useEffect(() => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlides = () => {
      slides.forEach((slide, index) => {
        slide.style.display = 'none';
      });

      slideIndex++;
      if (slideIndex > totalSlides) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 6000); // Change slide every 2 seconds
    };

    showSlides();
  }, []);

  return (
    <section className="relative container mx-auto">
      <div className="relative overflow-hidden h-96 flex justify-center items-center">
        <div className="slide absolute w-2/3 h-2/3">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Auction 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <p>Welcome to</p>
            <h2 className="text-2xl font-bold">Murphy Merchants Auctioneers</h2>
            <a href="#id_intro_container" className="text-blue-500 underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="slide absolute w-2/3 h-2/3">
          <img
            src="https://media.istockphoto.com/id/917901978/photo/gavel-on-auction-word.jpg?s=612x612&w=0&k=20&c=e5mnLUG2UEg6y8zfO1zc7Gi4Ed8PEEeV3eGeYOKxKBI="
            alt="Auction 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <p>Welcome to</p>
            <h2 className="text-2xl font-bold">Murphy Merchants Auctioneers</h2>
            <a href="#id_intro_container" className="text-blue-500 underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="slide absolute w-2/3 h-2/3">
          <img
            src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Auction 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <p>Welcome to</p>
            <h2 className="text-2xl font-bold">Murphy Merchants Auctioneers</h2>
            <a href="#id_intro_container" className="text-blue-500 underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
