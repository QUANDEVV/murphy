import React, { useState } from 'react';

const AuctionForm = () => {
  const [formData, setFormData] = useState({
    photo: null,
    name: '',
    description: '',
    category: '',
    startingPrice: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Photo:</label>
        <input type="file" name="photo" onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Starting Price:</label>
        <input type="number" name="startingPrice" value={formData.startingPrice} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Add Auction Item</button>
    </form>
  );
};

export default AuctionForm;
