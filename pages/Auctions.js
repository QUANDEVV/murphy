// pages/auctions.js
import { useState, useEffect } from 'react';
import { FaTag, FaDollarSign, FaStar } from 'react-icons/fa';

// 
const Auctions = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [filter, setFilter] = useState({ category: '', priceRange: '', condition: '' });

  // Fetch auctions data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://murphy-backends.onrender.com/auctions/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data);

          // Extract unique categories and conditions
          const uniqueCategories = [...new Set(data.map(item => item.category))];
          const uniqueConditions = [...new Set(data.map(item => item.condition))];

          setCategories(uniqueCategories);
          setConditions(uniqueConditions);
        } else {
          console.error('Failed to fetch auctions');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
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
    <div className="relative max-w-6xl p-6 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">Auction Listings</h1>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex items-center space-x-4">
          <FaTag className="text-gray-600" />
          <select
            name="category"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Category:</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
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
 {/* Condition Filter */}
        {/* Condition Filter */}
        <div className="flex items-center space-x-4">
          <FaStar className="text-gray-600" />
          <select
            name="condition"
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Condition:</option>
            {conditions.map((condition, index) => (
              <option key={index} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="overflow-hidden transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105">
            <img src={item.image} alt={item.name} className="object-cover w-full h-48" />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="mb-2 text-gray-600">{item.description}</p>
              <p className="mb-2 font-bold text-gray-800">
                Starting Price: KES {Number(item.price).toLocaleString('en-KE', { minimumFractionDigits: 0 })}
              </p>
              <p className="mb-2 text-gray-500">Category: {item.category}</p>
              <p className="mb-4 text-gray-500">
                Condition: <span className={`font-medium ${item.condition === 'New' ? 'text-green-500' : 'text-orange-500'}`}>{item.condition}</span>
              </p>
              <div className="flex space-x-4">
                <a
                  href={`https://wa.me/+254722890305?text=I%20am%20interested%20in%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.description)})`}
                  className="px-4 py-2 text-white transition bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Inquire
                </a>
                <a
                  href="tel:+254722890305"
                  className="px-4 py-2 text-white transition bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
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
        className="fixed p-3 text-white transition bg-green-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-green-600 focus:outline-none"
      >
        <i className="fa fa-arrow-circle-up" style={{ fontSize: '24px' }}></i>
      </button>
    </div>
  );
};

export default Auctions;

