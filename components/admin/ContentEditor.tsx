
import React, { useContext } from 'react';
import { SiteContext } from '../../context/SiteContext';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">{title}</h2>
        <div className="space-y-4">{children}</div>
    </div>
);

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-red-500 focus:border-red-500"
        />
    </div>
);

const TextAreaField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea
            value={value}
            onChange={onChange}
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-red-500 focus:border-red-500"
        />
    </div>
);


const ContentEditor: React.FC = () => {
    const context = useContext(SiteContext);

    if (!context) return <p>Loading editor...</p>;

    const { siteData, setSiteData } = context;

    const handleChange = (section: string, field: string, value: any, index?: number, subField?: string) => {
        setSiteData(prevData => {
            const newData = { ...prevData };
            let currentSection = (newData as any)[section];
            
            if (index !== undefined) {
                if (subField) {
                    currentSection[field][index][subField] = value;
                } else {
                    currentSection[field][index] = value;
                }
            } else {
                currentSection[field] = value;
            }
            return newData;
        });
    };
    
    return (
        <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">تعديل محتوى الصفحة</h1>

            {/* Hero Section */}
            <Section title="القسم الرئيسي (Hero)">
                <TextAreaField label="العنوان (يدعم HTML)" value={siteData.hero.title} onChange={e => handleChange('hero', 'title', e.target.value)} />
                <InputField label="النص الفرعي" value={siteData.hero.subtitle} onChange={e => handleChange('hero', 'subtitle', e.target.value)} />
                <InputField label="رابط الصورة" value={siteData.hero.imageUrl} onChange={e => handleChange('hero', 'imageUrl', e.target.value)} />
            </Section>

            {/* Product Description Section */}
            <Section title="قسم وصف المنتج">
                <InputField label="العنوان" value={siteData.productDescription.title} onChange={e => handleChange('productDescription', 'title', e.target.value)} />
                <TextAreaField label="الفقرة الأولى" value={siteData.productDescription.paragraph1} onChange={e => handleChange('productDescription', 'paragraph1', e.target.value)} />
                <TextAreaField label="الفقرة الثانية" value={siteData.productDescription.paragraph2} onChange={e => handleChange('productDescription', 'paragraph2', e.target.value)} />
                <InputField label="نص زر الطلب" value={siteData.productDescription.ctaText} onChange={e => handleChange('productDescription', 'ctaText', e.target.value)} />
                <InputField label="رابط الصورة" value={siteData.productDescription.imageUrl} onChange={e => handleChange('productDescription', 'imageUrl', e.target.value)} />
            </Section>
            
            {/* How to Order (Benefits) Section */}
            <Section title="قسم لماذا نحن رقم 1 (المزايا)">
                <InputField label="العنوان" value={siteData.howToOrder.title} onChange={e => handleChange('howToOrder', 'title', e.target.value)} />
                <InputField label="النص الفرعي" value={siteData.howToOrder.subtitle} onChange={e => handleChange('howToOrder', 'subtitle', e.target.value)} />
                <InputField label="رابط الصورة السفلية" value={siteData.howToOrder.imageUrl} onChange={e => handleChange('howToOrder', 'imageUrl', e.target.value)} />
            </Section>
            
            {/* Testimonials (Steps) Section */}
            <Section title="قسم خطوات الطلب">
                <InputField label="العنوان" value={siteData.testimonials.title} onChange={e => handleChange('testimonials', 'title', e.target.value)} />
                <InputField label="رابط الصورة" value={siteData.testimonials.imageUrl} onChange={e => handleChange('testimonials', 'imageUrl', e.target.value)} />
            </Section>

            {/* FAQ Section */}
            <Section title="قسم الأسئلة الشائعة">
                <InputField label="العنوان" value={siteData.faq.title} onChange={e => handleChange('faq', 'title', e.target.value)} />
                {siteData.faq.items.map((item, index) => (
                    <div key={index} className="p-4 border rounded-md">
                        <InputField label={`السؤال ${index + 1}`} value={item.question} onChange={e => handleChange('faq', 'items', { ...item, question: e.target.value }, index)} />
                        <TextAreaField label={`الإجابة ${index + 1}`} value={item.answer} onChange={e => handleChange('faq', 'items', { ...item, answer: e.target.value }, index)} />
                    </div>
                ))}
            </Section>

            {/* Offers Section Titles */}
            <Section title="عناوين قسم العروض">
                <InputField label="العنوان الرئيسي" value={siteData.offersSection.title} onChange={e => handleChange('offersSection', 'title', e.target.value)} />
                <InputField label="النص الفرعي" value={siteData.offersSection.subtitle} onChange={e => handleChange('offersSection', 'subtitle', e.target.value)} />
            </Section>
        </div>
    );
};

export default ContentEditor;
