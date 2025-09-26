import React, { useState } from 'react';
import type { Offer } from './LandingPage';

interface OrderFormProps {
    selectedOffer: Offer;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedOffer }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [wilaya, setWilaya] = useState('');
  const deliveryCost = 0; // Free delivery
  const total = selectedOffer.price + deliveryCost;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'جديد',
      fullName,
      phone,
      wilaya,
      offer: {
        name: selectedOffer.name,
        items: selectedOffer.items,
        price: selectedOffer.price,
      },
      total,
    };

    try {
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      // Add the new order to the beginning of the array
      const updatedOrders = [newOrder, ...existingOrders]; 
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      
      alert(`تم استلام طلبك بنجاح!\nسنتصل بك قريباً للتأكيد.`);
      
      setFullName('');
      setPhone('');
      setWilaya('');

    } catch (error) {
      console.error("Failed to save order:", error);
      alert("حدث خطأ أثناء حفظ طلبك. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <section id="order" className="p-6 bg-[#F0F2F5] text-center">
      <div className="container mx-auto max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">املأ الإستمارة لإتمام الطلب 📝</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <input 
                type="text" 
                placeholder="الاسم الكامل" 
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
                />
                <input 
                type="tel" 
                placeholder="رقم الهاتف" 
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                />
                <input 
                type="text" 
                placeholder="الولاية" 
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-red-300 focus:outline-none transition"
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                required
                />

                <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                    <h3 className="font-bold text-lg mb-2">ملخص الطلب</h3>
                    <div className="flex justify-between"><span>المنتج:</span> <strong>{selectedOffer.name} ({selectedOffer.items}x)</strong></div>
                    <div className="flex justify-between"><span>السعر:</span> <strong>{selectedOffer.price} دج</strong></div>
                    <div className="flex justify-between"><span>التوصيل:</span> <strong className="text-green-600">مجاني</strong></div>
                    <hr className="my-2"/>
                    <div className="flex justify-between text-lg font-bold"><span>الإجمالي:</span> <span>{total} دج</span></div>
                </div>

                <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
                تأكيد الطلب
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
