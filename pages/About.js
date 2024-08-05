import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      
      <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        M/S Murphy Merchants Auctioneers has been a trusted name in auctioneering since 2004. Our firm is led by Mr. Evans M. Maabi, a seasoned professional with over 20 years of experience in the field. Our team includes four field officers and two office staff, all dedicated to providing reliable and efficient auctioneering services.
        <br />
        <a href="Companyprofile.html" className="text-blue-500 hover:underline mt-4 block">Our Company Profile</a>
      </p>

      <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Evans M. Maabi:</strong> Proprietor and General Manager</p>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Field Officers:</strong> 4 experienced professionals</p>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Office Staff:</strong> Secretary cum receptionist and office clerk</p>

      <a href="contactus.html" className="text-blue-500 hover:underline mt-4 block">Contact Us</a>

      <h2 className="text-3xl font-bold mt-8 mb-6">Why Choose Murphy Merchants Auctioneers?</h2>

      <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">With over 20 years of experience, we have the knowledge and skills to handle all types of auctioneering services efficiently.</p>

      <h3 className="text-2xl font-semibold mb-4">Client Satisfaction</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Our strategic direction emphasizes client satisfaction as our key priority. We strive to exceed expectations in every transaction.</p>

      <h3 className="text-2xl font-semibold mb-4">Comprehensive Services</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">From general auctioneering to civil private investigations, our wide range of services ensures all your needs are met under one roof.</p>

      <h3 className="text-2xl font-semibold mb-4">Integrity and Reliability</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">We conduct our business with the highest standards of honesty and ethical conduct, treating all clients with fairness and respect.</p>

      <h2 className="text-3xl font-bold mt-8 mb-6">Mission, Vision, Motto</h2>

      <h3 className="text-2xl font-semibold mb-4">Mission</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Our mission is to be the most competent and reliable auctioneering firm, ensuring client satisfaction and staff prosperity both materially and spiritually.</p>

      <h3 className="text-2xl font-semibold mb-4">Vision</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">We aim to serve our clients with excellence and commitment at all times, adapting to changing times and embracing new technologies.</p>

      <h3 className="text-2xl font-semibold mb-4">Motto</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">"Excellence in Auctioneering, Commitment to Clients."</p>

      <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Quality Service</li>
        <li>Honesty</li>
        <li>Ethical Conduct</li>
        <li>Fairness, Courtesy, and Respect</li>
        <li>Clear Communication</li>
      </ul>
    </div>
  );
}

export default About;
