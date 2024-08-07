import React, { useState } from 'react';
import AuctionForm from '../components/AuctionForm';
import AdForm from '../components/AdForm';
import 'tailwindcss/tailwind.css';
import Login from '../components/Login';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('auctions');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-0 z-40 sm:hidden ${sidebarOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white z-50">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              {/* Heroicon name: outline/x */}
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
         
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="sm:hidden z-10 h-20">
        <div className="flex flex-col w-64 bg-white shadow-lg">
          <div className="flex-1 h-20 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h2 className="text-2xl font-semibold text-gray-800">Admins Dashboard</h2>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
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
        </div>
      </div>

      {/* Toggle button */}
      <div className="fixed top-41 left-4 z-50 sm:block : hidden">
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md shadow-lg"
          onClick={() => setSidebarOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden z-0 mt-4 ">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admin;
