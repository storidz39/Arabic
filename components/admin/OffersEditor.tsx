
import React, { useContext } from 'react';
import { SiteContext, Offer } from '../../context/SiteContext';

const OffersEditor: React.FC = () => {
    const context = useContext(SiteContext);

    if (!context) return <p>Loading offers editor...</p>;

    const { offers, setOffers } = context;

    const handleOfferChange = (id: number, field: keyof Offer, value: any) => {
        setOffers(prevOffers =>
            prevOffers.map(offer =>
                offer.id === id ? { ...offer, [field]: value } : offer
            )
        );
    };
    
    const handlePopularChange = (id: number) => {
        setOffers(prevOffers => 
            prevOffers.map(offer => ({
                ...offer,
                mostPopular: offer.id === id
            }))
        );
    };

    return (
        <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">تعديل العروض</h1>
            <div className="space-y-6">
                {offers.map(offer => (
                    <div key={offer.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">تعديل العرض: {offer.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">اسم العرض</label>
                                <input
                                    type="text"
                                    value={offer.name}
                                    onChange={(e) => handleOfferChange(offer.id, 'name', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">السعر (دج)</label>
                                <input
                                    type="number"
                                    value={offer.price}
                                    onChange={(e) => handleOfferChange(offer.id, 'price', Number(e.target.value))}
                                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">عدد العناصر</label>
                                <input
                                    type="number"
                                    value={offer.items}
                                    onChange={(e) => handleOfferChange(offer.id, 'items', Number(e.target.value))}
                                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700">رابط الصورة</label>
                                <input
                                    type="text"
                                    value={offer.imageUrl}
                                    onChange={(e) => handleOfferChange(offer.id, 'imageUrl', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                                />
                            </div>
                            <div className="md:col-span-2 flex items-center gap-4">
                               <div className="flex items-center">
                                    <input
                                        id={`popular-${offer.id}`}
                                        type="radio"
                                        name="mostPopular"
                                        checked={offer.mostPopular}
                                        onChange={() => handlePopularChange(offer.id)}
                                        className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                                    />
                                    <label htmlFor={`popular-${offer.id}`} className="ml-2 block text-sm text-gray-900">
                                        تحديد كـ "الأكثر طلباً"
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id={`value-${offer.id}`}
                                        type="checkbox"
                                        checked={!!offer.bestValue}
                                        onChange={(e) => handleOfferChange(offer.id, 'bestValue', e.target.checked)}
                                        className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                    />
                                    <label htmlFor={`value-${offer.id}`} className="ml-2 block text-sm text-gray-900">
                                        تحديد كـ "أفضل قيمة"
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersEditor;
