
import React from 'react';

const Feature: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
    <div className="bg-[#D9534F] text-white p-2 rounded-full text-xl">{icon}</div>
    <span className="font-semibold">{text}</span>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="p-6 bg-white shadow-md">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              الحل <span className="text-[#D9534F]">النهائي</span> لجعل طفلك بطل قصته
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              حوّل وقت القراءة إلى مغامرة لا تُنسى مع قصص مخصصة بالاسم والصورة.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Feature icon="👍" text="جودة عالية" />
              <Feature icon="🚀" text="نتائج سريعة" />
              <Feature icon="✅" text="سهل الإستخدام" />
              <Feature icon="💖" text="محبوب للأطفال" />
            </div>
            <a href="#order" className="w-full md:w-auto inline-block bg-[#D9534F] text-white py-3 px-10 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-lg">
              اطلب الآن واستفد من العرض
            </a>
          </div>
          <div className="flex justify-center">
            <img src="https://picsum.photos/seed/storybook-hero/500/500" alt="طفل يقرأ قصة بطلي" className="rounded-xl shadow-2xl w-full max-w-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
