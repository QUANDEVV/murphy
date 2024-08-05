import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Company Profile</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">Background</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        M/S Murphy Merchants Auctioneers, registered on October 25, 2004, has grown to become a leading auctioneering firm in Kenya. Our proprietor, Mr. Evans M. Maabi, brings over 20 years of experience to the firm, ensuring top-notch services for our clients.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Staff</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Proprietor:</strong> Mr. Evans M. Maabi</p>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Field Officers:</strong> 4</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Office Staff:</strong> Secretary cum receptionist and office clerk</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Services</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li><strong>General Auctioneering:</strong> Public auctions for properties charged to financers or banks.</li>
        <li><strong>Court Broking:</strong> Execution of court orders including attachments, sales, demolitions, and evictions.</li>
        <li><strong>Repossessors:</strong> Handling repossession of properties as per financier or bank agreements.</li>
        <li><strong>Distress for Chattels:</strong> Repossession of movable items secured as loan guarantees.</li>
        <li><strong>Distress for Rent (Bailiffs):</strong> Assisting landlords in recovering rents from defaulting tenants.</li>
        <li><strong>Civil Private Investigations:</strong> Investigating the financial capability of debtors for financers and bankers.</li>
        <li><strong>Commission Agents:</strong> Buying and selling properties on behalf of clients.</li>
      </ul>

      {/* Commented-out section for financial information */}
      {/* 
      <h3 className="text-xl font-semibold mt-6 mb-2">Financial Information</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Bankers:</strong></p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li>Equity Bank Ltd, Moi Avenue Branch, Mombasa</li>
        <li>Rafiki Microfinance, Moi Avenue Branch, Mombasa</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Insurer:</strong> Corporate Insurance Company Ltd, Professional Indemnity Cover, P.O. BOX 34172-00100, Nairobi</p>
      */}

      <h3 className="text-xl font-semibold mt-6 mb-2">Major Clients</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Finance Institutions:</strong></p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li>Agricultural Finance Corporation, Nairobi</li>
        <li>Equity Bank Ltd, Coast Region, Mombasa</li>
        <li>Rafiki Bank, Nairobi</li>
        <li>Progressive Credit, Nairobi</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Estate Agents:</strong></p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li>Jaraki Estate Agents, Mombasa</li>
        <li>Dk Real Estate Limited, Mombasa</li>
        <li>Knight Frank, Nairobi</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Advocates:</strong></p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li>Gachiri Kariuki & Co. Advocates, Mombasa</li>
        <li>Y.A. Ali & Co. Advocates, Mombasa</li>
        <li>Mwaniki Gitahi & Partners, Mombasa</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Referees</h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>J. M. Gitahi, Mwaniki Gitahi & Partners Advocates, Tel: 0721818449, Mombasa</li>
        <li>Davis J. Kithiki, Datoo Kithiki Ltd, Tel: 041 2311335/6, Mombasa</li>
        <li>Natasha Ali, N. A. Ali & Co. Advocates, Tel: 0729 344790, Mombasa</li>
        <li>Gachiri Kariuki & Co. Advocates, Tel: 0788 804096, Mombasa</li>
      </ul>
    </div>
  );
}

export default Profile;
