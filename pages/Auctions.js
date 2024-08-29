import { useState, useEffect } from 'react';
import { FaTag, FaDollarSign, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Auctions = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [filter, setFilter] = useState({ category: '', priceRange: '', condition: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if cached data is available
        const cachedData = localStorage.getItem('auctionData');
        if (cachedData) {
          console.log('Using cached data');
          const parsedData = JSON.parse(cachedData);
          setItems(parsedData);

          // Extract unique categories and conditions
          const uniqueCategories = [...new Set(parsedData.map(item => item.category))];
          const uniqueConditions = [...new Set(parsedData.map(item => item.condition))];

          setCategories(uniqueCategories);
          setConditions(uniqueConditions);

          // Set loading to false if data is fetched from cache
          setLoading(false);
        }

        // Determine whether to fetch new data (e.g., every 5 minutes)
        const fetchInterval = 5 * 60 * 1000; // 5 minutes
        const lastFetch = localStorage.getItem('lastFetch');
        const currentTime = new Date().getTime();

        if (!lastFetch || (currentTime - lastFetch > fetchInterval)) {
          console.log('Fetching new data');
          setIsFetching(true);
          const response = await fetch('https://murphy-backends.onrender.com/auctions/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setItems(data);

            // Update the cache with new data
            localStorage.setItem('auctionData', JSON.stringify(data));
            localStorage.setItem('lastFetch', currentTime.toString());

            // Extract unique categories and conditions
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            const uniqueConditions = [...new Set(data.map(item => item.condition))];

            setCategories(uniqueCategories);
            setConditions(uniqueConditions);
          } else {
            setError('Failed to fetch auctions');
          }
        } else {
          console.log('Cached data is up to date');
        }
      } catch (error) {
        setError('Error fetching data');
        console.error('Error:', error);
      } finally {
        setLoading(false);
        setIsFetching(false);
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

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <FaTag className="text-gray-600" />
              <label className="sr-only" htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
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
              <label className="sr-only" htmlFor="priceRange">Price Range</label>
              <select
                name="priceRange"
                id="priceRange"
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
            <div className="flex items-center space-x-4">
              <FaStar className="text-gray-600" />
              <label className="sr-only" htmlFor="condition">Condition</label>
              <select
                name="condition"
                id="condition"
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
               <Image
  src={item.image}
  alt={item.name}
  layout="responsive"
  className="object-cover w-full h-48"
  // loading="lazy"
  width={500} // specify the width based on your design
  height={300} // specify the height based on your design
  priority // Add this line to prioritize the image
/>

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
        </>
      )}

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
