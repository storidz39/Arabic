import React, { useState } from 'react';
import './Sidebar.css';
import type { Tab } from './AdminDashboard';

interface SidebarProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, handleLogout }) => {
    const [openMenu, setOpenMenu] = useState<string | null>('website');

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    
    const isSubmenuItemActive = (items: Tab[]) => {
        return items.some(item => item === activeTab);
    }

    return (
        <aside className="sidebar">
            <div className="logo">
                <div className="admin_logo">
                    <img src="https://i.imgur.com/sC5wU6I.png" alt="Logo" />
                </div>
            </div>
            <div className="menu_content">
                <div className="wrapper wrapper_bigTitle">
                    <div className="bigTitle">
                        <span className="text_item">التجارة الإلكترونية</span>
                    </div>
                </div>
                <ul className="menu_ul">
                    <li>
                        <a href="#" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>
                            <i className="icon fas fa-chart-pie"></i> <span className="text_item">لوحة القيادة</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setActiveTab('orders')} className={activeTab === 'orders' ? 'active' : ''}>
                            <i className="icon fas fa-shopping-bag"></i> <span className="text_item">الطلبات</span>
                        </a>
                    </li>
                    
                    {/* Website Management Submenu */}
                    <li>
                        <a href="#" onClick={() => toggleMenu('website')} className={`hasSub ${isSubmenuItemActive(['content', 'offers']) ? 'active' : ''}`}>
                            <i className="icon fas fa-house-damage"></i> <span className="text_item">موقع الويب</span>
                            <i className={`fas fa-angle-down arrow ${openMenu === 'website' ? 'rotate' : ''}`}></i>
                        </a>
                        <ul style={{ display: openMenu === 'website' ? 'block' : 'none' }}>
                            <li>
                                <a href="#" onClick={() => setActiveTab('content')} className={activeTab === 'content' ? 'sub-active' : ''}>
                                    <span className="text_item">تعديل المحتوى</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setActiveTab('offers')} className={activeTab === 'offers' ? 'sub-active' : ''}>
                                    <span className="text_item">تعديل العروض</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                     <li>
                        <a href="#" onClick={handleLogout}>
                            <i className="icon fas fa-sign-out-alt"></i> <span className="text_item">تسجيل الخروج</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;