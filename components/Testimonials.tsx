
import React from 'react';

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="text-center md:text-right">
        <h3 className="text-2xl font-bold text-[#D9534F] mb-2">{number}</h3>
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="p-6 bg-white">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#D9534F] mb-8">طريقة الطلب في 3 خطوات بسيطة</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="https://picsum.photos/seed/how-to-order/500/500" alt="خطوات الطلب" className="rounded-lg shadow-lg mx-auto" />
                </div>
                <div className="space-y-8">
                    <Step number="أولاً" title="أرسل لنا التفاصيل" description="شاركنا اسم طفلك وصورة واضحة له لنبدأ في تصميم قصته الخاصة." />
                    <Step number="ثانياً" title="نقوم بالتصميم والطباعة" description="فريقنا يبدأ العمل على تصميم القصة وطباعتها بأعلى جودة." />
                    <Step number="ثالثاً" title="استلم القصة عند باب بيتك" description="نوصل القصة مغلفة بعناية إلى منزلك في أي مكان كنت." />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
