
import React, { useState, useEffect } from 'react';
import type { Order } from './OrdersManager'; // Use a shared type

const StatCard: React.FC<{ title: string; value: string; icon: string }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <div className="bg-red-100 text-red-600 rounded-full p-3 text-2xl mr-4">{icon}</div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


const DashboardHome: React.FC = () => {
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        averageOrderValue: 0,
    });

    useEffect(() => {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
        
        const totalRevenue = orders.reduce((sum, order) => sum + (order.status !== 'ملغى' ? order.total : 0), 0);
        const validOrdersCount = orders.filter(o => o.status !== 'ملغى').length;
        const totalOrders = orders.length;
        const averageOrderValue = validOrdersCount > 0 ? totalRevenue / validOrdersCount : 0;

        setStats({
            totalRevenue,
            totalOrders,
            averageOrderValue,
        });
    }, []);

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">نظرة عامة</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                    title="إجمالي الإيرادات" 
                    value={`${stats.totalRevenue.toFixed(0)} دج`} 
                    icon="💰"
                />
                <StatCard 
                    title="إجمالي الطلبات" 
                    value={stats.totalOrders.toString()} 
                    icon="📦"
                />
                <StatCard 
                    title="متوسط قيمة الطلب" 
                    value={`${stats.averageOrderValue.toFixed(0)} دج`}
                    icon="📈"
                />
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">مرحباً بك في لوحة التحكم</h2>
                <p className="text-gray-600">
                    من هنا يمكنك إدارة كل جوانب متجرك. استخدم القائمة الجانبية للتنقل بين إدارة الطلبات، تعديل محتوى الصفحة الرئيسية، وتغيير العروض والأسعار.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;
