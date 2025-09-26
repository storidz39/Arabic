
import React, { useState, useEffect } from 'react';
import DashboardHome from './DashboardHome';
import OrdersManager from './OrdersManager';
import ContentEditor from './ContentEditor';
import OffersEditor from './OffersEditor';
import Sidebar from './Sidebar'; // Import the new sidebar

export type Tab = 'home' | 'orders' | 'content' | 'offers';

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');

  useEffect(() => {
    if (sessionStorage.getItem('isAdminAuthenticated') !== 'true') {
      window.location.hash = '#/admin/login';
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    window.location.hash = '#/';
  };

  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <DashboardHome />;
      case 'orders':
        return <OrdersManager />;
      case 'content':
        return <ContentEditor />;
      case 'offers':
        return <OffersEditor />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* New Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto" style={{ marginRight: '280px' }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;