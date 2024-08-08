import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const AuctionForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    image: Yup.mixed().required('Image is required'),
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().positive('Must be a positive number').required('Price is required'),
    condition: Yup.string().required('Condition is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Create a FormData object
    const data = new FormData();
    data.append('image', values.image);
    data.append('name', values.name);
    data.append('description', values.description);
    data.append('category', values.category);
    data.append('price', values.price);
    data.append('condition', values.condition);

    try {
      const response = await fetch('https://marphi.onrender.com/auctions/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // Handle the response data
      toast.success('Auction item added successfully');
      resetForm();
    } catch (error) {
      toast.error(`There was a problem: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        image: null,
        name: '',
        description: '',
        category: '',
        price: '',
        condition: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="mt-4 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <input
              type="file"
              name="image"
              onChange={(event) => setFieldValue('image', event.currentTarget.files[0])}
              className="mt-1 block w-full"
            />
            <ErrorMessage name="image" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <Field
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <Field
              as="textarea"
              name="description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <Field
              type="text"
              name="category"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <ErrorMessage name="category" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <Field
              type="number"
              name="price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <ErrorMessage name="price" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Condition:</label>
            <Field
              type="text"
              name="condition"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <ErrorMessage name="condition" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Auction Item
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuctionForm;
