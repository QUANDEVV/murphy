import React from 'react';
import { FaUserTie, FaRegHandshake, FaBuilding, FaStar, FaClock, FaGlobe, FaShieldAlt, FaBullhorn, FaEye, FaFlag, FaCogs, FaHandshake, FaSmile, FaPeopleCarry } from 'react-icons/fa';
import Ads from '../components/ads';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Our Story Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Our Story</h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
          M/S Murphy Merchants Auctioneers has been a trusted name in auctioneering since 2004. <br/> Our firm is led by Mr. Evans M. Maabi, a seasoned professional with over 20 years of experience in the field. <br /> Our team includes four field officers and two office staff, all dedicated to providing reliable and efficient auctioneering services.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="mb-16 border-b">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Our Team</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaUserTie className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Evans M. Maabi</h4>
            <p className="text-gray-700 dark:text-gray-300">Proprietor and General Manager</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaRegHandshake className="text-6xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Field Officers</h4>
            <p className="text-gray-700 dark:text-gray-300">4 experienced professionals</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaBuilding className="text-6xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Office Staff</h4>
            <p className="text-gray-700 dark:text-gray-300">Secretary cum receptionist and office clerk</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 border-b">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Why Choose Us</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaStar className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Expertise</h4>
            <p className="text-gray-700 dark:text-gray-300">With over 20 years of experience, we have the knowledge and skills to handle all types of auctioneering services efficiently.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaClock className="text-6xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Client Satisfaction</h4>
            <p className="text-gray-700 dark:text-gray-300">Our strategic direction emphasizes client satisfaction as our key priority. We strive to exceed expectations in every transaction.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaShieldAlt className="text-6xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Integrity and Reliability</h4>
            <p className="text-gray-700 dark:text-gray-300">We conduct our business with the highest standards of honesty and ethical conduct, treating all clients with fairness and respect.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Motto Section */}
      <section className="mb-16 border-b">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Mission, Vision, Motto</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaBullhorn className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Mission</h4>
            <p className="text-gray-700 dark:text-gray-300">Our mission is to be the most competent and reliable auctioneering firm, ensuring client satisfaction and staff prosperity both materially and spiritually.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaGlobe className="text-6xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Vision</h4>
            <p className="text-gray-700 dark:text-gray-300">We aim to serve our clients with excellence and commitment at all times, adapting to changing times and embracing new technologies.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaFlag className="text-6xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Motto</h4>
            <p className="text-gray-700 dark:text-gray-300">"Excellence in Auctioneering, Commitment to Clients."</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Core Values</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaSmile className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Service</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center">We are dedicated to providing the highest quality of service in all our auctioneering activities.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaHandshake className="text-6xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Honesty</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center">We value honesty and transparency, ensuring our clients trust in our operations and decisions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaCogs className="text-6xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Innovation</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center">We embrace innovation and technology to stay ahead in the auctioneering industry, offering efficient and modern solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[200px] flex flex-col items-center">
            <FaPeopleCarry className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Customer Focus</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center">Our clients are at the center of everything we do, and we are committed to meeting their needs and expectations.</p>
          </div>
        </div>
      </section>

      <section className='flex flex-row overflow-x-auto'>
        <div>
        <Ads />
        </div>
       
      </section>
    </div>
  );
}

export default About;
