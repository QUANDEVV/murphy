import React, { useEffect, useState } from 'react';

const Ads = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://murphy-backends.onrender.com/adverts/', {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          setAds(data);
        } else {
          console.error('Error fetching ads:', response.statusText);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold  mb-6">Ads</h1>
      <div className="ads-container flex  justify-between space-x-4 flex-row overflow-x-auto" >
        {ads.map((ad) => (
          <div key={ad.id} className="ad flex-1 bg-white shadow-lg rounded-lg overflow-hidden mb-6 sm:w-[250px]">
            <h2 className="text-xl font-semibold text-gray-800 p-4">{ad.name}</h2>
            <p className="text-gray-600 px-4">{ad.description}</p>
            {ad.image && (
              <img src={ad.image} alt={ad.name} className="w-full h-48 object-cover" />
            )}
            {ad.price && <p className="text-gray-800 font-bold mb-2">
  Price: KES {Number(ad.price).toLocaleString('en-KE', { minimumFractionDigits: 0 })}
</p>}
            
            {/* Call to Action Buttons */}
            <div className="cta-buttons flex justify-between p-4">
              <a
                href={`https://wa.me/+254722890305?text=I%20am%20interested%20in%20${encodeURIComponent(ad.name)}%20(${encodeURIComponent(ad.description)})`}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none transition"
              >
                Inquire
              </a>
              <a
                href="tel:+254722890305"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition ml-2"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
