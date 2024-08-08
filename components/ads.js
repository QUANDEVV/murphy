import React, { useEffect, useState } from 'react';

const Ads = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://marphi.onrender.com/adverts/', {
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
    <div>
      <h1>Ads</h1>
      <div className="ads-container">
        {ads.map((ad) => (
          <div key={ad.id} className="ad">
            <h2>{ad.name}</h2>
            <p>{ad.description}</p>
            {ad.image && <img src={ad.image} alt={ad.name} />}
            {ad.price && <p>Price: ${ad.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
