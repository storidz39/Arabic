
import React, { useState, useEffect } from 'react';
import DashboardHome from './DashboardHome';
import OrdersManager from './OrdersManager';
import ContentEditor from './ContentEditor';
import OffersEditor from './OffersEditor';

type Tab = 'home' | 'orders' | 'content' | 'offers';

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

  const TabButton: React.FC<{ tabName: Tab; label: string }> = ({ tabName, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        activeTab === tabName
          ? 'bg-red-600 text-white'
          : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <TabButton tabName="home" label="📊 نظرة عامة" />
          <TabButton tabName="orders" label="📦 الطلبات" />
          <TabButton tabName="content" label="✏️ تعديل المحتوى" />
          <TabButton tabName="offers" label="🎁 تعديل العروض" />
        </nav>
        <div className="p-4 mt-auto">
           <button 
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
