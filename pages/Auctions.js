// pages/auctions.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaTag, FaDollarSign, FaCalendarAlt, FaStar } from 'react-icons/fa';

// Dummy data for auction items
const dummyItems = [
  {
    id: 1,
    photo: 'https://media.istockphoto.com/id/1270127069/photo/real-estate-law-and-house-auction.webp?b=1&s=170667a&w=0&k=20&c=ctQI6hWGCiMEhsWZ5E8BMf3jp9O8R7HMrRFM_88wOrw=',
    name: 'Vintage Vase',
    description: 'A beautiful vintage vase from the 18th century.',
    startingPrice: 150,
    category: 'Antiques',
    condition: 'Excellent',
  },
  {
    id: 2,
    photo: 'https://images.unsplash.com/photo-1587391028516-7a0d600436ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Classic Car',
    description: 'A well-maintained classic car with original parts.',
    startingPrice: 20000,
    category: 'Vehicles',
    condition: 'Good',
  },
  {
    id: 3,
    photo: 'https://images.unsplash.com/photo-1583916011819-e4b81836bb57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Modern Art Painting',
    description: 'A contemporary painting by a famous artist.',
    startingPrice: 5000,
    category: 'Art',
    condition: 'New',
  },
  {
    id: 4,
    photo: 'https://plus.unsplash.com/premium_photo-1661729685861-6d1c647e71fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1Y3Rpb258ZW58MHx8MHx8fDA%3D',
    name: 'Antique Clock',
    description: 'An antique wall clock with intricate designs.',
    startingPrice: 800,
    category: 'Antiques',
    condition: 'Fair',
  },
];

const Auctions = () => {
  const [items, setItems] = useState(dummyItems);
  const [filter, setFilter] = useState({ category: '', priceRange: '', date: '', condition: '' });

  useEffect(() => {
    // Fetch auction items from backend if needed
    // Example: fetch('/api/auctions').then(res => res.json()).then(data => setItems(data));
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredItems = items.filter((item) => {
    const withinPriceRange = filter.priceRange ? item.startingPrice <= parseInt(filter.priceRange) : true;
    const matchesCategory = filter.category ? item.category.toLowerCase().includes(filter.category.toLowerCase()) : true;
    const matchesCondition = filter.condition ? item.condition.toLowerCase().includes(filter.condition.toLowerCase()) : true;
    return withinPriceRange && matchesCategory && matchesCondition;
  });

  return (
    <div className="relative max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Auction Listings</h1>

      <div className="mb-8 flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-4">
          <FaTag className="text-gray-600" />
          <select
            name="category"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Category:</option>
            <option value="Antiques">Antiques</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Art">Art</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <FaDollarSign className="text-gray-600" />
          <select
            name="priceRange"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Price Range (max):</option>
            <option value="1000">1000</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <FaCalendarAlt className="text-gray-600" />
          <input
            type="date"
            name="date"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <FaStar className="text-gray-600" />
          <select
            name="condition"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Condition:</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={item.photo} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-800 font-bold mb-2">Starting Price: ${item.startingPrice}</p>
              <p className="text-gray-500 mb-2">Category: {item.category}</p>
              <p className="text-gray-500 mb-4">Condition: <span className={`font-medium ${item.condition === 'Excellent' ? 'text-green-500' : item.condition === 'Good' ? 'text-yellow-500' : item.condition === 'Fair' ? 'text-orange-500' : 'text-red-500'}`}>{item.condition}</span></p>
              <div className="flex space-x-4">
                <a
                  href={`https://wa.me/?text=I%20am%20interested%20in%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.description)})`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition"
                >
                  Inquire
                </a>
                <a
                  href={`tel:+1234567890`}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="myBtn"
        title="Go to top"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition"
      >
        <i className="fa fa-arrow-circle-up" style={{ fontSize: '24px' }}></i>
      </button>
    </div>
  );
};

export default Auctions;
