
import React, { useState, useEffect } from 'react';

export interface Order {
  id: number;
  date: string;
  status: 'جديد' | 'مؤكد' | 'تم الشحن' | 'ملغى';
  fullName: string;
  phone: string;
  wilaya: string;
  baladiya: string;
  offer: {
    name: string;
    items: number;
    price: number;
  };
  total: number;
}

const OrdersManager: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
    setOrders(storedOrders);
  }, []);

  const updateOrderStatus = (orderId: number, newStatus: Order['status']) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderId: number) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'جديد': return 'bg-blue-200 text-blue-800';
      case 'مؤكد': return 'bg-yellow-200 text-yellow-800';
      case 'تم الشحن': return 'bg-green-200 text-green-800';
      case 'ملغى': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">إدارة الطلبات</h1>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        {orders.length === 0 ? (
            <p className="text-center text-gray-500 p-8">لا توجد طلبات حتى الآن.</p>
        ) : (
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الزبون</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">العرض</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجمالي</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">إجراءات</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.fullName}</div>
                    <div className="text-sm text-gray-500">{order.phone}</div>
                    <div className="text-sm text-gray-500">{order.wilaya}, {order.baladiya}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.offer.name} ({order.offer.items}x)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{order.total} دج</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.date).toLocaleString('ar-DZ')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                    </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center">
                        <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                            className="p-1 border rounded-md mr-2 text-xs"
                        >
                            <option value="جديد">جديد</option>
                            <option value="مؤكد">مؤكد</option>
                            <option value="تم الشحن">تم الشحن</option>
                            <option value="ملغى">ملغى</option>
                        </select>
                        <button onClick={() => deleteOrder(order.id)} className="text-red-600 hover:text-red-900">حذف</button>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    </div>
  );
};

export default OrdersManager;
