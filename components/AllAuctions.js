import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AllAuctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [editingAuction, setEditingAuction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('https://marphi.onrender.com/auctions/');
        if (!response.ok) throw new Error('Failed to fetch auctions');
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        setError(error.message);
        toast.error(`Error: ${error.message}`);
      }
    };
    fetchAuctions();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://marphi.onrender.com/auctions/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAuctions(auctions.filter(auction => auction.id !== id));
        toast.success('Auction deleted successfully');
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = new FormData();
    data.append('image', values.image || editingAuction.image);
    data.append('name', values.name);
    data.append('description', values.description);
    data.append('category', values.category);
    data.append('price', values.price);
    data.append('condition', values.condition);

    try {
      const method = editingAuction ? 'PUT' : 'POST';
      const url = editingAuction ? `https://marphi.onrender.com/auctions/${editingAuction.id}/` : 'https://marphi.onrender.com/auctions/';
      const response = await fetch(url, {
        method,
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        setAuctions(prev => {
          if (editingAuction) {
            return prev.map(auction => (auction.id === result.id ? result : auction));
          } else {
            return [...prev, result];
          }
        });
        setEditingAuction(null);
        toast.success(editingAuction ? 'Auction updated successfully' : 'Auction added successfully');
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    price: Yup.number().positive('Must be a positive number').required('Required'),
    condition: Yup.string().required('Required'),
    image: Yup.mixed()
      .test('fileSize', 'File too large', value => !value || (value && value.size <= 10485760)) // 10MB
  });

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      {editingAuction ? (
        <Formik
          initialValues={{
            image: null,
            name: editingAuction.name,
            description: editingAuction.description,
            category: editingAuction.category,
            price: editingAuction.price,
            condition: editingAuction.condition,
          }}
          validationSchema={validationSchema}
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
                  className="mt-1 block w-full"
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
                <label className="block text-gray-700">Category:</label>
                <Field
                  type="text"
                  name="category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="category">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <Field
                  type="number"
                  name="price"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="price">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Condition:</label>
                <Field
                  type="text"
                  name="condition"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <ErrorMessage name="condition">
                  {msg => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                {editingAuction ? 'Update Auction Item' : 'Add Auction Item'}
              </button>
              <button
                type="button"
                onClick={() => setEditingAuction(null)}
                className="w-full mt-2 px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="space-y-4">
          {auctions.length > 0 ? (
            auctions.map((auction) => (
              <div key={auction.id} className="p-4 bg-white rounded-lg shadow-md">
                 {auction.image && (
                    <img
                      src={auction.image}
                     
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                <h2 className="text-xl font-semibold">{auction.name}</h2>
                <p>{auction.description}</p>
                <p className="font-bold">Price: ${auction.price}</p>
                <p>Condition: {auction.condition}</p>
                <button
                  onClick={() => handleDelete(auction.id)}
                  className="mt-2 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => setEditingAuction(auction)}
                  className="mt-2 ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            ))
          ) : (
            <p>No auctions found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllAuctions;
