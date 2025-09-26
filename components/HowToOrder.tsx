
import React from 'react';

interface BenefitItem {
    number: string;
    text: string;
    description: string;
}

const Benefit: React.FC<BenefitItem> = ({ number, text, description }) => (
    <div className="flex items-start gap-4">
        <div className="text-4xl font-extrabold text-white opacity-50">{number}</div>
        <div>
            <h3 className="font-bold text-lg text-white">{text}</h3>
            <p className="text-red-100">{description}</p>
        </div>
    </div>
);

interface HowToOrderProps {
    content: {
        title: string;
        subtitle: string;
        benefits: BenefitItem[];
        imageUrl: string;
    }
}

const HowToOrder: React.FC<HowToOrderProps> = ({ content }) => {
  return (
    <section className="p-8 bg-[#D9534F] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
        <p className="mb-8">{content.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-8 text-right">
            {content.benefits.map((benefit) => (
                <Benefit key={benefit.number} number={benefit.number} text={benefit.text} description={benefit.description} />
            ))}
        </div>
        <div className="mt-10">
            <img src={content.imageUrl} alt="قبل وبعد استخدام قصص بطلي" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
