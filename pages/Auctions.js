// pages/auctions.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaTag, FaDollarSign, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Auctions = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({ category: '', priceRange: '', date: '', condition: '' });

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('https://marphi.onrender.com/auctions/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Failed to fetch auctions');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAuctions();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredItems = items.filter((item) => {
    const withinPriceRange = filter.priceRange ? item.price <= parseInt(filter.priceRange) : true;
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
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-800 font-bold mb-2">Starting Price: ${item.price}</p>
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
