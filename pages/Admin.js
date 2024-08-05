import React, { useState } from 'react';
import AuctionForm from '../components/AuctionForm';
import AdForm from '../components/AdForm';
import 'tailwindcss/tailwind.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('auctions');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
          <nav className="mt-6">
            <button
              className={`block w-full text-left px-4 py-2 mt-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 ${activeTab === 'auctions' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveTab('auctions')}
            >
              Add Auction Item
            </button>
            <button
              className={`block w-full text-left px-4 py-2 mt-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 ${activeTab === 'ads' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveTab('ads')}
            >
              Upload Advertisement
            </button>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6">
        {activeTab === 'auctions' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Add Auction Item</h2>
            <AuctionForm />
          </div>
        )}
        {activeTab === 'ads' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Upload Advertisement</h2>
            <AdForm />
          </div>
        )}
      </main>
    </div>
  );
}

export default Admin;
