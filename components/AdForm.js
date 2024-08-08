import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AdForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const data = new FormData();
    data.append('image', formData.image);
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);

    try {
      const response = await fetch('https://marphi.onrender.com/adverts/', {
        method: 'POST',
        body: data,
        // No need to set 'Content-Type' header for FormData
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        toast.success('Advertisement uploaded successfully!');
        // Clear form data after successful submission
        setFormData({
          image: null,
          name: '',
          description: '',
          price: '',
        });
      } else {
        const error = await response.json();
        console.error('Error:', error);
        toast.error(`Error: ${error.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error: Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Image:</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price (if applicable):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Upload Advertisement
      </button>
    </form>
  );
};

export default AdForm;
