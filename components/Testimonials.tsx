
import React from 'react';

interface StepItem {
    number: string;
    title: string;
    description: string;
}

const Step: React.FC<StepItem> = ({ number, title, description }) => (
    <div className="text-center md:text-right">
        <h3 className="text-2xl font-bold text-[#D9534F] mb-2">{number}</h3>
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

interface TestimonialsProps {
    content: {
        title: string;
        imageUrl: string;
        steps: StepItem[];
    }
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <section className="p-6 bg-white">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#D9534F] mb-8">{content.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src={content.imageUrl} alt="خطوات الطلب" className="rounded-lg shadow-lg mx-auto" />
                </div>
                <div className="space-y-8">
                    {content.steps.map((step, index) => (
                        <Step key={index} number={step.number} title={step.title} description={step.description} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
