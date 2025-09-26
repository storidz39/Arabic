
import React from 'react';
import type { Offer } from '../context/SiteContext';

interface OffersProps {
    offers: Offer[];
    selectedOffer: Offer;
    setSelectedOffer: (offer: Offer) => void;
    content: {
        title: string;
        subtitle: string;
    }
}

const Offers: React.FC<OffersProps> = ({ offers, selectedOffer, setSelectedOffer, content }) => {
  return (
    <section className="py-10 bg-white" id="offers">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{content.title}</h2>
        <p className="text-gray-600 mb-8">{content.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => setSelectedOffer(offer)}
              className={`p-6 rounded-xl border-4 cursor-pointer transition-all duration-300 ${selectedOffer.id === offer.id ? 'border-[#D9534F] scale-105 shadow-2xl' : 'border-gray-200 hover:border-[#D9534F] hover:shadow-xl'}`}
            >
              {offer.mostPopular && (
                 <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">الأكثر طلباً</span>
                </div>
              )}
               {offer.bestValue && (
                 <div className="text-center mb-4">
                    <span className="bg-green-400 text-green-800 text-sm font-bold px-3 py-1 rounded-full">أفضل قيمة</span>
                </div>
              )}
              <h3 className="font-bold text-xl text-gray-800">{offer.name}</h3>
              <p className="text-sm text-gray-500 mb-4">اطلب الآن {offer.items}x</p>
              <img src={offer.imageUrl} alt={offer.name} className="mx-auto my-4 h-32 w-32 object-cover rounded-full" />
              <p className="text-3xl font-bold text-[#D9534F]">{offer.price} دج</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
