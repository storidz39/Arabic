
import React, { createContext, useState, useEffect } from 'react';

// Interfaces
export interface Offer {
  id: number;
  name: string;
  price: number;
  items: number;
  mostPopular: boolean;
  bestValue?: boolean;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteData {
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
    features: { icon: string; text: string }[];
  };
  productDescription: {
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
  howToOrder: {
    title: string;
    subtitle: string;
    benefits: { number: string; text: string; description: string }[];
    imageUrl: string;
  };
  testimonials: { // Note: component is named Testimonials but used for "How to Order" steps
    title: string;
    imageUrl: string;
    steps: { number: string; title: string; description: string }[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  offersSection: {
    title: string;
    subtitle: string;
  }
}

interface SiteContextType {
  siteData: SiteData;
  setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
  offers: Offer[];
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
}

// Default State
const defaultSiteData: SiteData = {
  hero: {
    title: 'الحل <span class="text-[#D9534F]">النهائي</span> لجعل طفلك بطل قصته',
    subtitle: 'حوّل وقت القراءة إلى مغامرة لا تُنسى مع قصص مخصصة بالاسم والصورة.',
    imageUrl: 'https://picsum.photos/seed/storybook-hero/500/500',
    features: [
      { icon: '👍', text: 'جودة عالية' },
      { icon: '🚀', text: 'نتائج سريعة' },
      { icon: '✅', text: 'سهل الإستخدام' },
      { icon: '💖', text: 'محبوب للأطفال' },
    ],
  },
  productDescription: {
    title: 'قصص بطلي لإبداع لا حدود له',
    paragraph1: 'تعتبر قصص "بطلي" حلاً فعالاً لتعزيز حب القراءة لدى الأطفال. بتركيبتها الفريدة، تجعل الطفل هو بطل القصة، مما يحسن من تفاعله مع الأحداث ويعزز خياله.',
    paragraph2: 'الكريم يعزز ثقة الطفل بنفسه ويجعل القراءة تجربة ممتعة ومحبوبة، مما يترك أثراً إيجابياً دائماً.',
    ctaText: 'اطلبه الآن قبل إنتهاء العرض المحدود',
    imageUrl: 'https://picsum.photos/seed/reading-child/400/300',
    comparison: {
      productTitle: 'قصص بطلي',
      productFeatures: ['بطل مخصص', 'محتوى تفاعلي', 'جودة عالية', 'تعلم ممتع'],
      competitorTitle: 'القصص التقليدية',
      competitorFeatures: ['شخصيات ثابتة', 'قراءة مملة', 'جودة عادية', 'تركيز أقل'],
    },
  },
  howToOrder: {
    title: 'لماذا قصص بطلي هي رقم 1؟',
    subtitle: 'اكتشف المزايا التي تجعل قصصنا الخيار الأفضل لطفلك',
    benefits: [
      { number: '01', text: 'تعزيز حب القراءة', description: 'تحويل القراءة من واجب إلى مغامرة شيقة وممتعة.' },
      { number: '02', text: 'تنمية الخيال والإبداع', description: 'تشجيع الطفل على التفكير الإبداعي وتخيل نفسه في عوالم جديدة.' },
      { number: '03', text: 'بناء الثقة بالنفس', description: 'رؤية الطفل لنفسه كبطل يعزز من ثقته بقدراته وشخصيته.' },
      { number: '04', text: 'جودة عالية وألوان جذابة', description: 'مواد طباعة ممتازة ورسومات مبهجة تجذب انتباه الأطفال.' },
    ],
    imageUrl: 'https://picsum.photos/seed/before-after/800/250',
  },
  testimonials: {
    title: 'طريقة الطلب في 3 خطوات بسيطة',
    imageUrl: 'https://picsum.photos/seed/how-to-order/500/500',
    steps: [
        { number: 'أولاً', title: 'أرسل لنا التفاصيل', description: 'شاركنا اسم طفلك وصورة واضحة له لنبدأ في تصميم قصته الخاصة.' },
        { number: 'ثانياً', title: 'نقوم بالتصميم والطباعة', description: 'فريقنا يبدأ العمل على تصميم القصة وطباعتها بأعلى جودة.' },
        { number: 'ثالثاً', title: 'استلم القصة عند باب بيتك', description: 'نوصل القصة مغلفة بعناية إلى منزلك في أي مكان كنت.' },
    ]
  },
  faq: {
    title: 'الأسئلة الشائعة ❓',
    items: [
      { question: 'هل يمكن استخدام المنتج على جميع أنواع البشرة؟', answer: 'نعم، صمم كريم إزالة التجاعيد ليناسب مختلف أنواع البشرة بما في ذلك البشرة الجافة والدهنية والحساسة.' },
      { question: 'متى يمكنني رؤية النتائج؟', answer: 'تظهر النتائج الأولية في غضون أسابيع قليلة من الاستخدام المنتظم، مع تحسن ملحوظ في ملمس البشرة وتقليل ظهور التجاعيد.' },
      { question: 'هل المنتج آمن للاستخدام؟', answer: 'بالتأكيد، المنتج مكون من مواد طبيعية وآمنة تم اختبارها من قبل أطباء الجلدية لضمان سلامتكم.' },
    ]
  },
  offersSection: {
      title: 'عروضنا الحالية',
      subtitle: 'نسعى إلى تقديم أفضل العروض من أجلكم',
  }
};

const defaultOffers: Offer[] = [
    { id: 1, name: 'الأكثر طلبا', price: 1490, items: 1, mostPopular: true, imageUrl: 'https://picsum.photos/seed/offer1/200/200' },
    { id: 2, name: 'المتوسط طلبا', price: 2490, items: 2, mostPopular: false, bestValue: true, imageUrl: 'https://picsum.photos/seed/offer2/200/200' },
    { id: 3, name: 'الأكبر حجما', price: 3490, items: 3, mostPopular: false, imageUrl: 'https://picsum.photos/seed/offer3/200/200' },
];

// Context
export const SiteContext = createContext<SiteContextType | undefined>(undefined);

// Provider
export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const savedData = localStorage.getItem('siteData');
      return savedData ? JSON.parse(savedData) : defaultSiteData;
    } catch (error) {
      console.error("Failed to parse siteData from localStorage", error);
      return defaultSiteData;
    }
  });

  const [offers, setOffers] = useState<Offer[]>(() => {
    try {
      const savedOffers = localStorage.getItem('offers');
      return savedOffers ? JSON.parse(savedOffers) : defaultOffers;
    } catch (error) {
      console.error("Failed to parse offers from localStorage", error);
      return defaultOffers;
    }
  });

  useEffect(() => {
    localStorage.setItem('siteData', JSON.stringify(siteData));
  }, [siteData]);

  useEffect(() => {
    localStorage.setItem('offers', JSON.stringify(offers));
  }, [offers]);

  return (
    <SiteContext.Provider value={{ siteData, setSiteData, offers, setOffers }}>
      {children}
    </SiteContext.Provider>
  );
};
