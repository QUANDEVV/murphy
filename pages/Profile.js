import React from 'react';
import { FaUserTie, FaRegHandshake, FaBuilding, FaSuitcase, FaDollarSign, FaUsers, FaGlobe, FaShieldAlt, FaRegCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Company Background Section */}

      <section className="mb-16 border-b pb-6">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Company Background</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full  flex flex-col items-center">
            <FaBuilding  className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center" >M/S Murphy Merchants Auctioneers</h4>
            <p className="text-center text-gray-700 dark:text-gray-300">  Registered on October 25, 2004, we have grown to become a leading auctioneering firm in Kenya. Our proprietor, <br/> Mr. Evans M. Maabi, brings over 20 years of experience, ensuring top-notch services for our clients.</p>
          </div>
          
        </div>
      </section>

      {/* Staff Section */}
      <section className="mb-16 border-b pb-6">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Our Team</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[250px] flex flex-col items-center">
            <FaUserTie className="text-6xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Evans M. Maabi</h4>
            <p className="text-gray-700 dark:text-gray-300">Proprietor and General Manager</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[250px] flex flex-col items-center">
            <FaRegHandshake className="text-6xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Field Officers</h4>
            <p className="text-gray-700 dark:text-gray-300">4 experienced professionals</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-[250px] flex flex-col items-center">
            <FaBuilding className="text-6xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Office Staff</h4>
            <p className="text-gray-700 dark:text-gray-300">Secretary cum receptionist and office clerk</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16 border-b pb-6">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Our Services</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaSuitcase className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">General Auctioneering</h4>
            <p className="text-gray-700 dark:text-gray-300">Public auctions for properties charged to financers or banks.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaRegCalendarAlt className="text-4xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Court Broking</h4>
            <p className="text-gray-700 dark:text-gray-300">Execution of court orders including attachments, sales, demolitions, and evictions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaDollarSign className="text-4xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Repossessors</h4>
            <p className="text-gray-700 dark:text-gray-300">Handling repossession of properties as per financier or bank agreements.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaRegCalendarAlt className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Distress for Chattels</h4>
            <p className="text-gray-700 dark:text-gray-300">Repossession of movable items secured as loan guarantees.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaRegCalendarAlt className="text-4xl text-green-600 dark:text-green-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Distress for Rent</h4>
            <p className="text-gray-700 dark:text-gray-300">Assisting landlords in recovering rents from defaulting tenants.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaUsers className="text-4xl text-yellow-600 dark:text-yellow-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Civil Private Investigations</h4>
            <p className="text-gray-700 dark:text-gray-300">Investigating the financial capability of debtors for financers and bankers.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <FaGlobe className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Commission Agents</h4>
            <p className="text-gray-700 dark:text-gray-300">Buying and selling properties on behalf of clients.</p>
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="mb-16 border-b pb-6">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Major Clients</h3>
        <div className="flex flex-row gap-8 overflow-x-auto">
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Finance Institutions</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Agricultural Finance Corporation, Nairobi</li>
              <li>Equity Bank Ltd, Coast Region, Mombasa</li>
              <li>Rafiki Bank, Nairobi</li>
              <li>Progressive Credit, Nairobi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Estate Agents</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Jaraki Estate Agents, Mombasa</li>
              <li>Dk Real Estate Limited, Mombasa</li>
              <li>Knight Frank, Nairobi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Advocates</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Gachiri Kariuki & Co. Advocates, Mombasa</li>
              <li>Kenya Law Associates, Nairobi</li>
              <li>J.M. Kirimi Advocates, Nairobi</li>
              <li>Githinji & Associates, Nairobi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Major Clients</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Co-operative Bank of Kenya</li>
              <li>International Commercial Bank</li>
              <li>Housing Finance Co. of Kenya Ltd</li>
              <li>Standard Chartered Bank</li>
              <li>NIC Bank</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="mb-16 border-b pb-6">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">Office Locations</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaMapMarkedAlt className="text-4xl text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Mombasa Office</h4>
              <p className="text-gray-700 dark:text-gray-300">P.O. Box 26537-80100 Mombasa, Tanzania, Kenya</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaMapMarkedAlt className="text-4xl text-green-600 dark:text-green-400" />
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Nairobi Office</h4>
              <p className="text-gray-700 dark:text-gray-300">P.O. Box 31358-00600 Nairobi, Kenya</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaMapMarkedAlt className="text-4xl text-yellow-600 dark:text-yellow-400" />
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Kisumu Office</h4>
              <p className="text-gray-700 dark:text-gray-300">P.O. Box 993-40100 Kisumu, Kenya</p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-row gap-8 overflow-x-auto"> */}

      {/* Contact Information Section */}
     
    </div>
  );
};

export default Profile;
