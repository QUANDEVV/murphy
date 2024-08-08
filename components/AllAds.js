import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AllAds = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);
  const [editingAd, setEditingAd] = useState(null);

  // Fetch ads on component mount
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://marphi.onrender.com/adverts/');
        if (!response.ok) {
          throw new Error('Failed to fetch ads');
        }
        const data = await response.json();
        setAds(data);
      } catch (error) {
        setError(error.message);
        toast.error('Failed to fetch ads');
      }
    };

    fetchAds();
  }, []);

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://marphi.onrender.com/adverts/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAds(ads.filter(ad => ad.id !== id)); // Remove ad from state
        toast.success('Advertisement deleted successfully!');
      } else {
        const error = await response.json();
        console.error('Error:', error);
        toast.error(`Error: ${error.message || 'Failed to delete advertisement'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error: Please try again later.');
    }
  };

  // Handle edit request
  const handleEdit = (ad) => {
    setEditingAd(ad); // Set the ad to be edited
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Create a FormData object
    const data = new FormData();
    if (values.image) {
      data.append('image', values.image);
    } else {
      // Include the existing image URL if no new image is selected
      data.append('image', editingAd.image);
    }
    data.append('name', values.name);
    data.append('description', values.description);
    data.append('price', values.price);

    try {
      const response = await fetch(`https://marphi.onrender.com/adverts/${editingAd.id}/`, {
        method: 'PUT',
        body: data,
        // No need to set 'Content-Type' header for FormData
      });

      if (response.ok) {
        const result = await response.json();
        setAds(prevAds => prevAds.map(ad => ad.id === result.id ? result : ad));
        setEditingAd(null); // Close the edit form
        resetForm();
        toast.success('Advertisement updated successfully!');
      } else {
        const error = await response.json();
        console.error('Error:', error);
        toast.error(`Error: ${error.message || 'Failed to update advertisement'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error: Please try again later.');
    }
    setSubmitting(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {editingAd ? (
        <Formik
          initialValues={{
            image: null,
            name: editingAd.name,
            description: editingAd.description,
            price: editingAd.price,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            price: Yup.number().positive('Must be a positive number').nullable(),
            image: Yup.mixed().test(
              'fileSize',
              'You need to select a new image',
              (value) => value || editingAd.image
            ),
          })}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700">Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={(event) => setFieldValue('image', event.currentTarget.files[0])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="image">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <Field
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="name">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description:</label>
                <Field
                  as="textarea"
                  name="description"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="description">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price (if applicable):</label>
                <Field
                  type="number"
                  name="price"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="price">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Update Advertisement
              </button>
              <button
                type="button"
                onClick={() => setEditingAd(null)}
                className="w-full mt-2 px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="space-y-4">
          {ads.length > 0 ? (
            ads.map(ad => (
              <div key={ad.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  {ad.image && (
                    <img
                      src={ad.image}
                      alt={ad.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{ad.name}</h3>
                    <p className="text-gray-700">{ad.description}</p>
                    {ad.price && <p className="text-gray-500">Price: ${ad.price}</p>}
                  </div>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(ad)}
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ad.id)}
                    className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No ads found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllAds;
