
import React, { useState, useContext } from 'react';
import TopBar from './TopBar';
import HeroSection from './HeroSection';
import ProductDescription from './ProductDescription';
import HowToOrder from './HowToOrder';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Offers from './Offers';
import OrderForm from './OrderForm';
import { SiteContext, Offer } from '../context/SiteContext';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
                <a href="#/admin/login" className="text-sm text-gray-400 hover:text-white mt-2 inline-block">
                    دخول المشرف
                </a>
            </div>
        </footer>
    );
};


const LandingPage: React.FC = () => {
    const context = useContext(SiteContext);

    if (!context) {
        return <div>Loading...</div>; // Or some other loading state
    }
    
    const { siteData, offers } = context;
    
    // Initialize selectedOffer with the first offer, or a default if none exist
    const [selectedOffer, setSelectedOffer] = useState<Offer>(offers.find(o => o.mostPopular) || offers[0] || {
        id: 0, name: 'No Offer', price: 0, items: 0, mostPopular: false, imageUrl: ''
    });

    // Ensure selectedOffer is always valid
    React.useEffect(() => {
        const popularOffer = offers.find(o => o.mostPopular) || offers[0];
        if (popularOffer) {
            setSelectedOffer(popularOffer);
        }
    }, [offers]);

  return (
    <div>
      <TopBar />
      <main>
        <HeroSection content={siteData.hero} />
        <ProductDescription content={siteData.productDescription} />
        <HowToOrder content={siteData.howToOrder} />
        <Testimonials content={siteData.testimonials}/>
        <FAQ content={siteData.faq} />
        <Offers 
            offers={offers} 
            selectedOffer={selectedOffer} 
            setSelectedOffer={setSelectedOffer}
            content={siteData.offersSection}
        />
        <OrderForm selectedOffer={selectedOffer} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
