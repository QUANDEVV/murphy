import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Auction 1"
        className="w-full h-full object-cover brightness-75"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Discover Exclusive Auctions
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8">
          Explore a curated selection of unique items and experiences. Join now and find your next treasure.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
