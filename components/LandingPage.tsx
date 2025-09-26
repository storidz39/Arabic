import React, { useState } from 'react';
import TopBar from './TopBar';
import HeroSection from './HeroSection';
import ProductDescription from './ProductDescription';
import HowToOrder from './HowToOrder';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Offers from './Offers';
import OrderForm from './OrderForm';

export interface Offer {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  items: number;
  mostPopular: boolean;
  bestValue?: boolean;
}


const LandingPage: React.FC = () => {
    const offers: Offer[] = [
      { id: 1, name: 'الأكثر طلبا', price: 1490, items: 1, mostPopular: true },
      { id: 2, name: 'المتوسط طلبا', price: 2490, items: 2, mostPopular: false, bestValue: true },
      { id: 3, name: 'الأكبر حجما', price: 3490, items: 3, mostPopular: false },
    ];
    const [selectedOffer, setSelectedOffer] = useState<Offer>(offers[0]);


  return (
    <div>
      <TopBar />
      <main>
        <HeroSection />
        <ProductDescription />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <Offers offers={offers} selectedOffer={selectedOffer} setSelectedOffer={setSelectedOffer} />
        <OrderForm selectedOffer={selectedOffer} />
      </main>
    </div>
  );
};

export default LandingPage;
