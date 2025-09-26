import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/admin/LoginPage';
import AdminDashboard from './components/admin/AdminDashboard';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/admin/login':
        return <LoginPage />;
      case '#/admin/dashboard':
        return <AdminDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;
