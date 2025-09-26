
import React from 'react';

export interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
    <div>
        <h3 className="font-bold text-lg mb-2">{question}</h3>
        <div className="bg-[#D9534F] text-white p-3 rounded-lg">
            <p>{answer}</p>
        </div>
    </div>
);

interface FAQProps {
    content: {
        title: string;
        items: FAQItemProps[];
    }
}

const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{content.title}</h2>
      <div className="space-y-6 max-w-3xl mx-auto text-right">
        {content.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
