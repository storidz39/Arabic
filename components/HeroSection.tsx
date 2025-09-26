
import React from 'react';

interface FeatureProps {
  icon: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
    <div className="bg-[#D9534F] text-white p-2 rounded-full text-xl">{icon}</div>
    <span className="font-semibold">{text}</span>
  </div>
);

interface HeroSectionProps {
  content: {
    title: string;
    subtitle: string;
    imageUrl: string;
    features: FeatureProps[];
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className="p-6 bg-white shadow-md">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: content.title }}>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {content.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {content.features.map((feature, index) => (
                <Feature key={index} icon={feature.icon} text={feature.text} />
              ))}
            </div>
            <a href="#order" className="w-full md:w-auto inline-block bg-[#D9534F] text-white py-3 px-10 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-lg">
              اطلب الآن واستفد من العرض
            </a>
          </div>
          <div className="flex justify-center">
            <img src={content.imageUrl} alt="طفل يقرأ قصة بطلي" className="rounded-xl shadow-2xl w-full max-w-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
