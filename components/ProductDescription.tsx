
import React from 'react';

interface ProductDescriptionProps {
    content: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        ctaText: string;
        imageUrl: string;
        comparison: {
            productTitle: string;
            productFeatures: string[];
            competitorTitle: string;
            competitorFeatures: string[];
        };
    };
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ content }) => {
  return (
    <section className="p-6 bg-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-[#D9534F]">{content.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-right">
                <p className="text-gray-700 leading-relaxed mb-4">
                    {content.paragraph1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                    {content.paragraph2}
                </p>
                 <a href="#order" className="mt-6 w-full inline-block bg-[#D9534F] text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors">
                    {content.ctaText}
                </a>
            </div>
             <img src={content.imageUrl} alt="طفل سعيد يقرأ" className="mx-auto rounded-lg shadow-lg"/>
        </div>

        <div className="border-2 border-[#D9534F] rounded-lg p-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 text-green-600">{content.comparison.productTitle}</h3>
                    <ul className="space-y-2 text-right">
                        {content.comparison.productFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center justify-end gap-2"><span>{feature}</span> ✅</li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                     <h3 className="font-bold text-xl mb-2 text-red-500">{content.comparison.competitorTitle}</h3>
                     <ul className="space-y-2 text-right">
                        {content.comparison.competitorFeatures.map((feature, index) => (
                             <li key={index} className="flex items-center justify-end gap-2"><span>{feature}</span> ❌</li>
                        ))}
                    </ul>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
