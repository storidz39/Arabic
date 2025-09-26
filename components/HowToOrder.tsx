
import React from 'react';

const Benefit: React.FC<{ number: string, text: string, description: string }> = ({ number, text, description }) => (
    <div className="flex items-start gap-4">
        <div className="text-4xl font-extrabold text-white opacity-50">{number}</div>
        <div>
            <h3 className="font-bold text-lg text-white">{text}</h3>
            <p className="text-red-100">{description}</p>
        </div>
    </div>
);


const HowToOrder: React.FC = () => {
  return (
    <section className="p-8 bg-[#D9534F] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-2">لماذا قصص بطلي هي رقم 1؟</h2>
        <p className="mb-8">اكتشف المزايا التي تجعل قصصنا الخيار الأفضل لطفلك</p>
        <div className="grid md:grid-cols-2 gap-8 text-right">
            <Benefit number="01" text="تعزيز حب القراءة" description="تحويل القراءة من واجب إلى مغامرة شيقة وممتعة." />
            <Benefit number="02" text="تنمية الخيال والإبداع" description="تشجيع الطفل على التفكير الإبداعي وتخيل نفسه في عوالم جديدة." />
            <Benefit number="03" text="بناء الثقة بالنفس" description="رؤية الطفل لنفسه كبطل يعزز من ثقته بقدراته وشخصيته." />
            <Benefit number="04" text="جودة عالية وألوان جذابة" description="مواد طباعة ممتازة ورسومات مبهجة تجذب انتباه الأطفال." />
        </div>
        <div className="mt-10">
            <img src="https://picsum.photos/seed/before-after/800/250" alt="قبل وبعد استخدام قصص بطلي" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
