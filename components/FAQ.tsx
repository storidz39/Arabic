
import React from 'react';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => (
    <div>
        <h3 className="font-bold text-lg mb-2">{question}</h3>
        <div className="bg-[#D9534F] text-white p-3 rounded-lg">
            <p>{answer}</p>
        </div>
    </div>
);

const FAQ: React.FC = () => {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">الأسئلة الشائعة ❓</h2>
      <div className="space-y-6 max-w-3xl mx-auto text-right">
        <FAQItem question="هل يمكن استخدام المنتج على جميع أنواع البشرة؟" answer="نعم، صمم كريم إزالة التجاعيد ليناسب مختلف أنواع البشرة بما في ذلك البشرة الجافة والدهنية والحساسة." />
        <FAQItem question="متى يمكنني رؤية النتائج؟" answer="تظهر النتائج الأولية في غضون أسابيع قليلة من الاستخدام المنتظم، مع تحسن ملحوظ في ملمس البشرة وتقليل ظهور التجاعيد." />
        <FAQItem question="هل المنتج آمن للاستخدام؟" answer="بالتأكيد، المنتج مكون من مواد طبيعية وآمنة تم اختبارها من قبل أطباء الجلدية لضمان سلامتكم." />
      </div>
    </section>
  );
};

export default FAQ;
