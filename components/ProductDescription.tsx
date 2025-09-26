
import React from 'react';

const ProductDescription: React.FC = () => {
  return (
    <section className="p-6 bg-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-[#D9534F]">قصص بطلي لإبداع لا حدود له</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-right">
                <p className="text-gray-700 leading-relaxed mb-4">
                    تعتبر قصص "بطلي" حلاً فعالاً لتعزيز حب القراءة لدى الأطفال. بتركيبتها الفريدة، تجعل الطفل هو بطل القصة، مما يحسن من تفاعله مع الأحداث ويعزز خياله.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    الكريم يعزز ثقة الطفل بنفسه ويجعل القراءة تجربة ممتعة ومحبوبة، مما يترك أثراً إيجابياً دائماً.
                </p>
                 <a href="#order" className="mt-6 w-full inline-block bg-[#D9534F] text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors">
                    اطلبه الآن قبل إنتهاء العرض المحدود
                </a>
            </div>
             <img src="https://picsum.photos/seed/reading-child/400/300" alt="طفل سعيد يقرأ" className="mx-auto rounded-lg shadow-lg"/>
        </div>

        <div className="border-2 border-[#D9534F] rounded-lg p-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 text-green-600">قصص بطلي</h3>
                    <ul className="space-y-2 text-right">
                        <li className="flex items-center justify-end gap-2"><span>بطل مخصص</span> ✅</li>
                        <li className="flex items-center justify-end gap-2"><span>محتوى تفاعلي</span> ✅</li>
                        <li className="flex items-center justify-end gap-2"><span>جودة عالية</span> ✅</li>
                        <li className="flex items-center justify-end gap-2"><span>تعلم ممتع</span> ✅</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                     <h3 className="font-bold text-xl mb-2 text-red-500">القصص التقليدية</h3>
                     <ul className="space-y-2 text-right">
                        <li className="flex items-center justify-end gap-2"><span>شخصيات ثابتة</span> ❌</li>
                        <li className="flex items-center justify-end gap-2"><span>قراءة مملة</span> ❌</li>
                        <li className="flex items-center justify-end gap-2"><span>جودة عادية</span> ❌</li>
                        <li className="flex items-center justify-end gap-2"><span>تركيز أقل</span> ❌</li>
                    </ul>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
