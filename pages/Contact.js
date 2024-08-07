import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-6   ">
      {/* Contact Information */}
      <div className="flex flex-row gap-8 overflow-x-auto">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-2xl text-blue-500 dark:text-blue-400 mr-3" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Phone Number:</strong> 0732890305 and 0736670986
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-2xl text-blue-500 dark:text-blue-400 mr-3" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> <a href="mailto:Murphyauctions22@gmail.com" className="text-blue-500 hover:underline">Murphyauctions22@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-2xl text-blue-500 dark:text-blue-400 mr-3" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Address:</strong> ASHA Trust Building, Meru Road, Mombasa
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-2xl text-blue-500 dark:text-blue-400 mr-3" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-4 sm:w-[250px]">Location on Google Maps</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5547.906412661405!2d39.66957649619072!3d-4.062332265884409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401321d4cc88db%3A0xe060f735310ae4df!2sMeru%20Rd%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1719244729790!5m2!1sen!2ske"
            width="100%"
            height="300"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form action="mailto:Murphyauctions22@gmail.com" method="post" enctype="text/plain" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Send</button>
        </form>
      </div>

      {/* WhatsApp Contact */}
      <div className="flex items-center mt-8">
        <a href="https://wa.me/254722890305" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
          <FaWhatsapp className="text-2xl mr-2" />
          <span>Chat with us on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
